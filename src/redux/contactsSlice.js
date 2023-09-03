import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [
  { name: 'yurii', number: '345535', id: 'BvOVyQfkaDE_s_duiJHc4' },
  { name: 'lena', number: '4646564', id: 'u95KIk79pPpm6ncBNGkoO' },
  { name: 'vasia', number: '4564656', id: 'udfgdfg57567pPpm6noO' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
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
  },
});

export const { addContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
