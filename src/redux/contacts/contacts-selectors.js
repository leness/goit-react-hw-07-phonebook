import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contact.loading;

const getFilter = state => state.contact.filter;

const getAllContacts = state => state.contact.contacts;

// const getVisibleContacs = state => {
//     const contacts = getAllContacts(state);
//     const filter = getFilter(state);

//     const normalizeSearch = filter.toLowerCase();

    // return contacts.filter(({name}) =>
    //   name.toLowerCase().includes(normalizeSearch),
    // );
//  };

const getVisibleContacs = createSelector(
    [getAllContacts, getFilter],
    (contacts, filter) => {
        const normalizeSearch = filter.toLowerCase();
        
        return contacts.filter(({ name }) =>
            name.toLowerCase().includes(normalizeSearch),
        );
    },
);

export default {
    getLoading,
    getAllContacts,
    getFilter,
    getVisibleContacs,
}