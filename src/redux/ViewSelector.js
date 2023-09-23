import { useSelector } from 'react-redux';
export const getContacts = state => state.contacts.items;

export const getViewContacts = () => {
  const currentFilter = useSelector(state => state.filter);
  const contacts = useSelector(getContacts);

  const normalizedFilter = currentFilter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
