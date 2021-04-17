import { createAction } from '@reduxjs/toolkit';

export const fetchContactRequest = createAction('contacts/addContactRequest');
export const fetchContactsSuccess = createAction('contacts/addContactsSuccess');
export const fetchContactsError = createAction('contacts/addContactsError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactsSuccess = createAction('contacts/addContactsSuccess');
export const addContactsError = createAction('contacts/addContactsError');

export const deleteContactRequest = createAction('contacts/deleteContactRequest');
export const deleteContactsSuccess = createAction('contacts/deleteContactsSuccess');
export const deleteContactsError = createAction('contacts/deleteContactsError');

export const changeFilter = createAction('contacts/change-filter');

