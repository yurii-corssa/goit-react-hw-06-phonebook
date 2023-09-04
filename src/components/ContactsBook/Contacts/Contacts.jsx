import { useSelector } from 'react-redux';
import { ContactItems } from '../ContactItems/ContactItems';
import { List } from './Contacts.styled';
import { getContacts, getFilter } from 'redux/selectors';
import { normalizeStr } from 'utils/normalizeStr';
import { Notification } from '../Notification/Notification';

export const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilteredContacts = value => {
    return contacts.filter(({ name }) =>
      normalizeStr(name).includes(normalizeStr(value))
    );
  };

  const filteredContacts = getFilteredContacts(filter);

  if (!contacts.length) {
    return <Notification text="Contact book is empty" />;
  }

  if (!filteredContacts.length && filter) {
    return <Notification text="Contact with the entered name was not found!" />;
  }

  return (
    <List>
      <ContactItems filteredContacts={filteredContacts} />
    </List>
  );
};
