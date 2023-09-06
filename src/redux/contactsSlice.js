import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = {
  contacts: [
    { name: 'Poli', number: '345-535-665', id: 'BvOVyQfkaDE_s_duiJHc4' },
    { name: 'Ajax', number: '464-656-544', id: 'u95KIk79pPpm6ncBNGkoO' },
  ],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts = [...state.contacts, action.payload];
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    removeContact(state, action) {
      state.contacts = state.contacts.filter(
        ({ name }) => name !== action.payload
      );
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
