import React, { useState } from 'react';
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
  const initialDataClient = {
    namewaiter: '',
    nameclient: '',
    numtable: '',
    numpeople: ''
  }

  //funcion para capturar y controlar el estado de los datos de los inputs(cliente) y la orden.
  const [client, setClient] = useState(initialDataClient);

  return (
    <div className="App">
      <Router>

        <Route exact path="/">
          <BackgLogin />
        </Route>

        <Route exact path="/waiter" >
          <InitWaiters client={client} setClient={setClient}/>
        </Route>

        <Route exact path="/login" render={() => <BackgLogin client={client} setCliente={setClient}/>} />

        <Route exact path="/breakfast">
          <BreakFast client={client} setClient={setClient}/> 
        </Route>

        <Route exact path="/restday" component={RestDay} />

        <Route exact path="/waiterregister" component={WaiterRegister} />






      </Router>

    </div>
  );
}


export default App;
