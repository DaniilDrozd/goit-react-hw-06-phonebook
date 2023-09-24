import React from 'react';
import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  return (
    <ul className={css.ulList}>
      {contacts.map(({ name, number, id }) => (
        <li key={id} id={id}>
          {name}: {number}
          <button
            className={css.btnContact}
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
