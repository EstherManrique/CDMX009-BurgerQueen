import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import BackgLogin from './components/BackgLogin';
import InitWaiters from './components/InitWaiter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>

        <Route exact path="/" component={BackgLogin} />

        <Route exact path="/waiter" component={InitWaiters} />

      </Router>


    </div>
  );
}


export default App;
