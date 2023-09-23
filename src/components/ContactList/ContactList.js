import React from 'react';
import PropTypes from 'prop-types';
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
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactList;
