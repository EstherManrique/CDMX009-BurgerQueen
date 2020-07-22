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
      items: {
        id: 1,
        name: 'Cafe Americano',
        price: 5.00,
        total: 125.00
      },

      items: {
        id: 2,
        name: 'Cafe con Leche',
        price: 7.00,
        total: 125.00
      },
      items: {
        id: 3,
        name: 'Sandwich',
        price: 7.00,
        total: 125.00
      },
      items: {
        id: 4,
        name: 'Jugo',
        price: 10.00,
        total: 125.00
      }
  }






/*   const addItem = (product, quantity = 1) => {

  } */

  // forma declarativa 
/*   const calculateTotal = (items) => items.reduce((total, item) => total + item.quantity * item.price, 0) */
  // forma imperativa
  // const calculateTotal = (items) => 
  // {
  //   let total = 0

  //   items.forEach(item => {
  //     total = total + item.quantity * item.price
  //   })

  //   return total;
  // }


//FUNCION PARA BORRAR ITEMS
/*     const deleteItem = (productId) => {
    const items = order.items.filter(item => item.id !== productId)
    setOrder({ ...order, items, total: calculateTotal(items) })
  } */

  const [client, setClient] = useState(initialDataClient);

  const [order, setOrder] = useState({
    items:[]
  });

  let addItemToOrder = (product) => {
    setOrder({...order, items:[...order.items, product]})
  }



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
          </Route>, 

          <Route exact path="/breakfast">
            <BreakFast client={client} setClient={setClient} addItemToOrder={addItemToOrder}
            order={order}
            />
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
