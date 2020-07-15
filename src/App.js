import React, { useState } from 'react';
import firebase from './firebase';
import 'firebase/app';
import 'firebase/firestore';
import {
  BrowserRouter as Router,
  //Switch,
  Route,
  //Link
} from "react-router-dom";

import BackgLogin from './components/BackgLogin';
import InitWaiters from './components/InitWaiter';
import BreakFast from './components/BreakFast';
import RestDay from './components/RestDay';
import WaiterRegister from './components/WaiterRegister';
import WaiterAccount from './components/WaiterAccount';
import Kitchen from './components/Kitchen';
import ReausableTable from './components/ReusableTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/dist/react-bootstrap'

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

  const [order, setOrder] = useState(0);


  return (
    <div className="App">
      <Router>

        <Route exact path="/">
          <BackgLogin />
        </Route>

        <Route exact path="/waiter">
          <InitWaiters client={client} setClient={setClient} order={order} setOrder={setOrder} />
        </Route>

        <Route exact path="/login">
          <BackgLogin />
        </Route>

        <Route exact path="/breakfast">
          <BreakFast client={client} setClient={setClient} />
        </Route>

        <Route exact path="/restday">
          <RestDay client={client} setClient={setClient} />
        </Route>

        <Route exact path="/waiterregister">
          <WaiterRegister />
        </Route>

        <Route exact path="/waiteraccount">
          <WaiterAccount />
        </Route>

        <Route exact path="/kitchen">
          <Kitchen />
        </Route>

      </Router>
    </div>
  );
}

export default App;
