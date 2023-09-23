import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import css from './Filter.module.css';
const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div>
      <label>
        Find contacts by name
        <input
          className={css.NameStyle}
          type="text"
          value={filter}
          onChange={handleFilterChange}
        />
      </label>
    </div>
  );
};

export default Filter;
