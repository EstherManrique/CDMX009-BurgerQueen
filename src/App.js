import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Logo from './components/Logo/Logo.js';
import BackgLogin from './components/BackgLogin';
import InitWaiters from './components/InitWaiter'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        {/* PAGINA LOGIN */}
        <Route exact path="/" component={BackgLogin} />


        {/* PAGINA-1 MESERO */}
        <Route exact path="/waiter" component={InitWaiters} />
      </Router>
    </div>
  );
}



export default App;
