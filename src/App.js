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
import KitchenRegister from './components/KitchenRegister';
import WaiterAccount from './components/WaiterAccount';
import Kitchen from './components/Kitchen';
//import ReausableTable from './components/ReusableTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/dist/react-bootstrap'

import './App.css';

function App() {

  const initialDataClient = {
    numorder: '',
    namewaiter: '',
    nameclient: '',
    numtable: '',
    numpeople: '',
    // items: [
    //   {
    //     id: 1,
    //     name: 'Hamburguse simple',
    //     price: 25.00,
    //     quantity: 5,
    //     total: 125.00
    //   },
    //   ...
    // ]
  }

  const addItem = (product, quantity = 1) => {

  }

  // forma declarativa 
  const calculateTotal = (items) => items.reduce((total, item) => total + item.quantity * item.price, 0)
  // forma imperativa
  // const calculateTotal = (items) => 
  // {
  //   let total = 0

  //   items.forEach(item => {
  //     total = total + item.quantity * item.price
  //   })

  //   return total;
  // }

  const deleteItem = (productId) => {
    const items = order.items.filter(item => item.id !== productId)
    setOrder({ ...order, items, total: calculateTotal(items) })
  }
  //funcion para capturar y controlar el estado de los datos de los inputs(cliente) y la orden.
  const [client, setClient] = useState(initialDataClient);

  const [order, setOrder] = useState(0);


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
            <BreakFast client={client} setClient={setClient} />
          </Route>

          <Route exact path="/restday">
            <RestDay client={client} setClient={setClient} />
          </Route>

          <Route exact path="/waiterregister">
            <WaiterRegister client={client} setClient={setClient} order={order} setOrder={setOrder} />
          </Route>

          <Route exact path="/kitchenregister">
            <KitchenRegister client={client} setClient={setClient} order={order} setOrder={setOrder} />
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
