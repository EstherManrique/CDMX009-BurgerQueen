import React, { useState } from 'react';
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  HashRouter
  //Link
} from "react-router-dom";

import BackgLogin from './components/BackgLogin';
import InitWaiters from './components/InitWaiter';
import BreakFast from './components/BreakFast';
import RestDay from './components/RestDay';
import WaiterRegister from './components/WaiterRegister';
import WaiterAccount from './components/WaiterAccount';
import Kitchen from './components/Kitchen';
//import ReausableTable from './components/ReusableTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/dist/react-bootstrap';

// import TestTable from './components/TestTable'
// import TrialTable from './components/TrialTable'

import './App.css';

function App() {

  const initialDataClient = {
    namewaiter: '',
    nameclient: '',
    numtable: '',
    numpeople: ''
  }

  const breakfast = {
    coffeblack: '',
    coffemilk: '',
    sandwich: '',
    juice: ''
  }

  //funcion para capturar y controlar el estado de los datos de los inputs(cliente) y la orden.
  const [client, setClient] = useState(initialDataClient);

  const [order, setOrder] = useState(1);

  const [menubreak, setMenubreak] = useState(breakfast);


  return (
    <div className="App">

      <HashRouter>
        <Switch>
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
            <BreakFast client={client} setClient={setClient} menubreak={menubreak} setMenubreak={setMenubreak} />
          </Route>

          <Route exact path="/restday">
            <RestDay client={client} setClient={setClient} />
          </Route>

          <Route exact path="/waiterregister">
            <WaiterRegister client={client} setClient={setClient} order={order} setOrder={setOrder} />
          </Route>

          <Route exact path="/waiteraccount">
            <WaiterAccount client={client} setClient={setClient} order={order} setOrder={setOrder} />
          </Route>

          <Route exact path="/kitchen">
            <Kitchen client={client} setClient={setClient} order={order} setOrder={setOrder} />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
