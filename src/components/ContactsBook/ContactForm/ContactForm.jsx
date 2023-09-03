import { useState } from 'react';
import { Form, Label } from './ContactForm.styled';
import { Button } from 'components/Button/Button';
import { Input } from 'components/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';
import { nanoid } from '@reduxjs/toolkit';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const normalizeStr = string => string.trim().toLowerCase();

  const findContact = value =>
    contacts.find(
      contact => normalizeStr(contact.name) === normalizeStr(value)
    );

  const submitForm = e => {
    e.preventDefault();

    if (findContact(name)) {
      alert(`${name} is already to contacts`);
      return;
    }
    dispatch(addContact(name, number));

    resetForm();
  };

  const idName = nanoid();
  const idNumber = nanoid();

  return (
    <Form onSubmit={submitForm}>
      <Label htmlFor={idName}>Name</Label>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={name}
        id={idName}
        onChange={handleChange}
        required
      />
      <Label htmlFor={idNumber}>Number</Label>
      <Input
        type="tel"
        name="number"
        pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={number}
        id={idNumber}
        onChange={handleChange}
        required
      />

      <Button type="submit">Add contact</Button>
    </Form>
  );
};
