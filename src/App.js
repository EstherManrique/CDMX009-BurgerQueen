import React, { useState } from 'react';
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  HashRouter
  //Link
} from "react-router-dom";

import RestDay from './components/RestDay';
import Kitchen from './components/Kitchen';
import BreakFast from './components/BreakFast';
import BackgLogin from './components/BackgLogin';
import InitWaiters from './components/InitWaiter';
import WaiterAccount from './components/WaiterAccount';
import WaiterRegister from './components/WaiterRegister';
import KitchenRegister from './components/KitchenRegister';

import 'react-bootstrap/dist/react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

const products = [
  {
    id: 1,
    name: 'Cafe Americano',
    price: 5.00,
    total: 125.00,
    image: 'american-coffe.jpg'
  },
  {
    id: 2,
    name: 'Cafe con Leche',
    price: 7.00,
    total: 125.00,
    image: 'coffe-milk.jpg'
  },
  {
    id: 3,
    name: 'Sandwich',
    price: 7.00,
    total: 125.00,
    image: 'sandwich.jpg'
  },
  {
    id: 4,
    name: 'Jugo',
    price: 10.00,
    total: 125.00,
    image: 'orange-juice.jpg'
  }
]

function App() {
  const initialDataClient = {
    numorder: '',
    namewaiter: '',
    nameclient: '',
    numtable: '',
    numpeople: '',
    items: []
  }

  //funcion para capturar y controlar el estado de los datos de los inputs(cliente) y la orden.
  const [client, setClient] = useState(initialDataClient);

  const [order, setOrder] = useState({
    items: []
  });

  const addItemToOrder = (product) => {
    let newItems = client.items;
    console.log(newItems)

    if (client.items.length > 0) {
      console.log("entró el if")
      newItems.push(client.items.reduce((acc, item) => {
        return (item.id === product.id)
          ? [...acc, { ...item, quantity: item.quantity + 1 }]
          : [...acc, { ...product, quantity: 1 }]
      }, []))
    } else {
      newItems.push({ ...product, quantity: 1 })
      console.log("entró el else")
    }


    setClient({
      ...client,
      items: newItems
    })

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
          </Route>

          <Route exact path="/breakfast">
            <BreakFast client={client} setClient={setClient} products={products} addItemToOrder={addItemToOrder} order={order} setOrder={setOrder} />
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
