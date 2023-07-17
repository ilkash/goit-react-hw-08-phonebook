import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'Redux/operations';
import { fetchContacts } from 'Redux/operations';
import { Button, Item, List } from './ContactList.styled';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectFilteredContacts,
  selectIsLoading,
} from 'Redux/selectors';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { toastifyOptions } from 'utils/toastifyOptions';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const result = useSelector(selectFilteredContacts);

  const getFilteredContacts = data => {
    if (filter.toLowerCase() && !data.length) {
      toast.warn(`No contacts matching your request`, toastifyOptions);
    }
    return data;
  };

  const filteredContacts = getFilteredContacts(result);

  return (
    <>
      {isLoading && contacts?.length === 0 && <div>Loading...</div>}
      {error && !isLoading && <div>Ooops, error...</div>}
      {!filteredContacts?.length && !error && !isLoading}
      {!error && !isLoading && filteredContacts?.length > 0 && (
        <List>
          {filteredContacts.map(({ name, number, id }) => {
            return (
              <Item key={id}>
                <span>{name}:</span>
                <span>{number}</span>
                <Button
                  type="button"
                  onClick={() => dispatch(deleteContact(id))}
                >
                  Delete contact
                </Button>
              </Item>
            );
          })}
        </List>
      )}
    </>
  );
};
