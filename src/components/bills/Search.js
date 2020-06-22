import React, { useContext, useState } from 'react';
import BillContext from '../../context/bill/billContext';

const Search = () => {
  const billContext = useContext(BillContext);

  const { searchBills } = billContext;

  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      // alertContext.setAlert('Please enter something', 'light');
      console.log('Please enter something');
    } else {
      searchBills(text);
      // setText('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} action='' className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
    </div>
  );
};

export default Search;
