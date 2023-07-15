import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://64b2e9de38e74e386d55b760.mockapi.io/contacts',
});

export const getAllContacts = () => contactsInstance.get('/');

export const deleteContact = id => {
  return contactsInstance.delete(`/${id}`);
};

export const addContact = data => {
  return contactsInstance.post('/', data);
};
