import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IContactsSlice {
  contactsInfo: IContacts | {};
  aboutInfo: IAboutInfo | {};
}

const initialState: IContactsSlice = {
  contactsInfo: {},
  aboutInfo: {},
};

const ContactsSlice = createSlice({
  name: "Contacts",
  initialState,
  reducers: {
    _setContactsInfo(state, action: PayloadAction<IContacts>) {
      state.contactsInfo = action.payload;
    },
    _setAboutInfo(state, action: PayloadAction<IAboutInfo>) {
      state.aboutInfo = action.payload;
    },
  },
});

export const ContactsActions = ContactsSlice.actions;
export default ContactsSlice.reducer;

export interface IAboutInfo {
  title: string;
  content: string;
}

export interface IContacts {
  email: string;
  phone: string;
  fax: string;
  opening_hours: string;
  address: string;
  address_location: string;
  info: string;
}
