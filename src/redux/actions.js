import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('contacts/Add', (name, number) => ({
    payload: {
        id: uuidv4(),
        name,
        number,
        completed: false,
        date: Date.now(),
    }
}));

const deleteContact = createAction('contacts/Delete');
const changeFilter = createAction('contacts/ChangeFilter');
const changeSorting = createAction('contacts/ChangeSorting');

export default {addContact, deleteContact, changeFilter, changeSorting};