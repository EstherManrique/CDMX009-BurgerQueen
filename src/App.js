import React from 'react';
import {
  BrowserRouter as Router,
  //Switch,
  Route,
  //Link
} from "react-router-dom";

import BackgLogin from './components/BackgLogin';
import InitWaiters from './components/InitWaiter';
import BreakFast from './components/BreakFast'
import RestDay from './components/RestDay'
import WaiterRegister from './components/WaiterRegister'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>

        <Route exact path="/" component={BackgLogin} />

        <Route exact path="/waiter" component={InitWaiters} />

        <Route exact path="/login" component={BackgLogin} />

        <Route exact path="/breakfast" component={BreakFast} />

        <Route exact path="/restday" component={RestDay} />

        <Route exact path="/waiterregister" component={WaiterRegister} />





      </Router>

    </div>
  );
}


export default App;
