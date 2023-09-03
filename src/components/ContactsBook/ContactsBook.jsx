import { useState } from 'react';
import { nanoid } from 'nanoid';
import {
  ContactsWrapper,
  Container,
  Title,
  TitleContacts,
} from './ContactsBook.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import { Notification } from './Notification/Notification';
import { Filter } from './Filter/Filter';
import { useLocalStorage } from 'hooks/useLocalStorage';

export const ContactsBook = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const normalizeStr = string => string.trim().toLowerCase();

  const handleChangeFilter = e => setFilter(e.target.value);

  const getFilteredContacts = value => {
    return contacts.filter(contact =>
      normalizeStr(contact.name).includes(normalizeStr(value))
    );
  };

  const removeContact = value =>
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.name !== value);
    });

  const filteredContacts = getFilteredContacts(filter);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />

      <TitleContacts>Contacts</TitleContacts>
      <ContactsWrapper>
        <Filter onChange={handleChangeFilter} filter={filter} />
        <Contacts
          filteredContacts={filteredContacts}
          onRemove={removeContact}
        />

        {contacts.length !== 0 && !filteredContacts.length && (
          <Notification text="Contact with the entered name was not found!" />
        )}
        {!contacts.length && <Notification text="Contact book is empty" />}
      </ContactsWrapper>
    </Container>
  );
};
