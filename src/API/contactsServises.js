import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://6489b7b15fa58521cab01f9e.mockapi.io/contacts',
});

export const getAllContacts = () => contactsInstance.get('/');

export const deleteContact = id => {
  return contactsInstance.delete(`/${id}`);
};

export const addContact = data => {
  return contactsInstance.post('/', data);
};
