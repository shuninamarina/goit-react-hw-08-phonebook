import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
  return {
    ...state,
    isLoading: true,
    error: null,
  };
};

const handleRejected = (state, action) => {
  return {
    ...state,
    isLoading: true,
    error: action.payload,
  };
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder

      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          items: action.payload,
          error: null,
        };
      })
      .addCase(fetchContacts.rejected, handleRejected)

      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          items: [action.payload, ...state.items],

          error: null,
        };
      })
      .addCase(addContact.rejected, handleRejected)

      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          items: state.items.filter(
            contact => contact.id !== action.payload.id
          ),
          error: null,
        };
      })
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
