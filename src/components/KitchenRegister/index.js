import React, { Fragment, useEffect, useState } from 'react';
import db from '../../firebase';
import Boton from '../Boton/Boton'
import { Link } from 'react-router-dom';
import TableKitche from '../Tables/TableKitchen';

import styles from './styles.module.css';

const KitchenRegister = ({ client, setClient, order, setOrder }) => {
    const [orders, setOrders] = useState([])

    useEffect(() => {

        db.collection('orders').get().then((querySnapshot) => {
            const data = []
            querySnapshot.forEach(function (doc) {
                data.push(doc.data());
            });
            setOrders(data);
        });
    }, []);

    return (
        <Fragment>
            <TableKitche
                client={client}
                setClient={setClient}
                order={order}
                setOrder={setOrder}
                orders={orders}
            />

            <div className={styles.butons}>
                <Link to="waiter">
                    <Boton text={"Regresar"} allstyles={"buttonOutWaiter"} />
                </Link>

                <Link to="waiteraccount">
                    <Boton text={"Editar"} allstyles={"buttonOutWaiter"} />
                </Link>
            </div>
        </Fragment>
    );
};

export default KitchenRegister;