import { ContactWrapper, ListItem } from './ContactItems.styled';
import { Button } from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';
import PropTypes from 'prop-types';

export const ContactItems = ({ filteredContacts }) => {
  const dispatch = useDispatch();

  return filteredContacts.map(contact => {
    const { id, name, number } = contact;
    const handleRemove = () => dispatch(removeContact(name));

    return (
      <ListItem key={id}>
        <ContactWrapper>
          <span>{name}:</span>
          <span>{number} </span>
        </ContactWrapper>
        <Button type="button" onClick={handleRemove}>
          Delete
        </Button>
      </ListItem>
    );
  });
};

ContactItems.propTypes = {
  filteredContacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};
