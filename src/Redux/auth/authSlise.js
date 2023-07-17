import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

import {
  registerUser,
  logInUser,
  logOutUser,
  getCurrentUser,
} from './operations';

import persistReducer from 'redux-persist/es/persistReducer';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const customArrThunks = [registerUser, logInUser];

const status = {
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected',
};

const fn = status => customArrThunks.map(el => el[status]);

const handlePending = state => {
  return state;
};

const handlePendingCurrentUser = state => {
  state.isRefreshing = true;
};

const handleRejected = state => {
  return state;
};

const handleRejectedCurrentUser = state => {
  state.isRefreshing = false;
};

const handleFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

const handleFulfilledLogOut = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const handleFulfilledCurrentUser = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    const { pending, fulfilled, rejected } = status;
    builder
      .addCase(logOutUser.pending, handlePending)
      .addCase(logOutUser.fulfilled, handleFulfilledLogOut)
      .addCase(logOutUser.rejected, handleRejected)
      .addCase(getCurrentUser.pending, handlePendingCurrentUser)
      .addCase(getCurrentUser.fulfilled, handleFulfilledCurrentUser)
      .addCase(getCurrentUser.rejected, handleRejectedCurrentUser)
      .addMatcher(isAnyOf(...fn(pending)), handlePending)
      .addMatcher(isAnyOf(...fn(fulfilled)), handleFulfilled)
      .addMatcher(isAnyOf(...fn(rejected)), handleRejected);
  },
});

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);

export const authReducer = authSlice.reducer;
export default persistedAuthReducer;
