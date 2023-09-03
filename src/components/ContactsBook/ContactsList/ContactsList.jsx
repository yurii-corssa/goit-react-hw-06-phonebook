import PropTypes from 'prop-types';
import { ContactWrapper, ListItem } from './ContactsList.styled';
import { Button } from 'components/Button/Button';

export const ContactsList = ({ contacts, onRemove }) => {
  return contacts.map(contact => {
    const { id, name, number } = contact;

    return (
      <ListItem key={id}>
        <ContactWrapper>
          <span>{name}:</span>
          <span>{number} </span>
        </ContactWrapper>
        <Button type="button" onClick={() => onRemove(name)}>
          Delete
        </Button>
      </ListItem>
    );
  });
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  onRemove: PropTypes.func.isRequired,
};
