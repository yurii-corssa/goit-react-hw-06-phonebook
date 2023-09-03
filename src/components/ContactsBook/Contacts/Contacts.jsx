import PropTypes from 'prop-types';
import { ContactsList } from '../ContactsList/ContactsList';
import { List } from './Contacts.styled';

export const Contacts = ({ filteredContacts, onRemove }) => (
  <List>
    <ContactsList contacts={filteredContacts} onRemove={onRemove} />
  </List>
);

Contacts.propTypes = {
  filteredContacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
    .isRequired,
  onRemove: PropTypes.func.isRequired,
};
