import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home';

import Bill from './components/bills/Bill';

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
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/bill/:bill_slug' component={Bill} />
        </Switch>
      </Router>
    </BillState>
  );
};

export default App;
