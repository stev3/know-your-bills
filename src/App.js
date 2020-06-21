import React, { useEffect } from 'react';

import Search from './components/bills/Search';
import Bills from './components/bills/Bills';

import BillState from './context/bill/BillState';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  }, []);

  return (
    <BillState>
      <div className='container'>
        <Search />
        <Bills />
      </div>
    </BillState>
  );
};

export default App;
