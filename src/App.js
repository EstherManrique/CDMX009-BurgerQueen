import React, { useState } from 'react';
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  HashRouter
  //Link
} from "react-router-dom";

//import { currencyFormatter } from '../src/utils/index'

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


import { products } from '../src/utils/products.js';


import './App.css';



function App() {
  const initialDataClient = {
    numorder: '',
    namewaiter: '',
    nameclient: '',
    numtable: '',
    numpeople: '',
    items: []
  }

  const [client, setClient] = useState(initialDataClient);

  const [order, setOrder] = useState({
    items: []
  });

  const addItemToOrder = (product) => {
    let newItems = [];

    if (client.items.find((i) => i.id === product.id)) {
      newItems = client.items.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })
    } else {
      newItems = [...client.items, { ...product, quantity: 1 }]
    }

    setClient({
      ...client,
      items: newItems
    })
  }

  const deleteItem = (position) => {
    if (position > -1) {
      client.items.splice(position, 1);
    }
    console.log(client.items)

    setClient({
      ...client,
      items: client.items
    })

  }

  const calculateTotal = (items) => {
    console.log("aqui sale item de calculatedTotal", items)
    let total = 0;

    items.forEach(item => {
      total = (item.quantity * item.price) + total
    })
    return total;
  }

  const calculateAmount = (price, quantity) => {
    console.log("aquí esta el calculateAmount", price)

    return price * quantity
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
            <BreakFast client={client} setClient={setClient} products={products} addItemToOrder={addItemToOrder} deleteItem={deleteItem} /* order={order} setOrder={setOrder} */ />
          </Route>

          <Route exact path="/restday">
            <RestDay client={client} setClient={setClient} />
          </Route>

          <Route exact path="/waiterregister">
            <WaiterRegister client={client} setClient={setClient} /* order={order} setOrder={setOrder} */ />
          </Route>

          <Route exact path="/kitchenregister">
            <KitchenRegister client={client} setClient={setClient} /* order={order} setOrder={setOrder} */ />
          </Route>

          <Route exact path="/waiteraccount/:orderId">
            <WaiterAccount client={client} setClient={setClient} calculateTotal={calculateTotal} calculateAmount={calculateAmount}/* order={order} setOrder={setOrder} */ />
          </Route>

          <Route exact path="/kitchen/:orderId">
            <Kitchen client={client} setClient={setClient} /* order={order} setOrder={setOrder} */ />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
