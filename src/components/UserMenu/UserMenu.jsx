import { useDispatch } from 'react-redux';
import { logOutUser } from 'Redux/auth/operations';
import { Wrapper } from './UserMenu.styled';
import { useAuth } from 'hooks/useAuth';
import { Chip } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOutUser());

  return (
    <Wrapper>
      <p>Welcome, {user.name}</p>

      <Chip
        label="Logout"
        variant="outlined"
        onClick={handleLogOut}
        sx={{
          border: '1px solid #dfcece',
          color: '#000000',
        }}
      />
    </Wrapper>
  );
};
