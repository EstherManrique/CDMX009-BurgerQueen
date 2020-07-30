import React from 'react';
import Logo from '../Logo/Logo';
import Boton from '../Boton/Boton'
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import DateTime from '../DateTime/DateTables';


import styles from './styles.module.css';

const TableWaiter = ({ client, order, orders }) => {

    return (
        <div>
            <div className={styles.headerWrapper}>
                <div className={styles.logoBreakFast}>
                    <Logo nameClass={"logoSmallLunch"} />
                </div>

                <div className={styles.titleBreakfast}>
                    <h2>Registro de Ordenes</h2>
                    <h3>Cocina</h3>
                </div>

                <div className={styles.iconHeader}>
                    <span className={styles.iconWaiterBreakFast}></span>
                </div>
            </div>

            <div className={styles.tablekitchen}>
                <Table striped bordered hover className={styles.tableLines}>
                    <thead>
                        <tr className={styles.columns}>
                            <th scope="col"> Mesero </th>
                            <th scope="col"> No. <br /> Orden </th>
                            <th scope="col"> Fecha </th>
                            <th scope="col"> No. <br />  Mesa </th>
                            <th scope="col"> No. <br /> Personas </th>
                            <th scope="col"> Hora <br /> Entrada </th>
                            <th scope="col"> Hora <br /> Salida </th>
                            <th scope="col"> Status </th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={index}>
                                <td> {order.namewaiter} </td>
                                <td> {index} </td>
                                <td> <DateTime /> </td>
                                <td> {order.numtable} </td>
                                <td> {order.numpeople} </td>
                                <td>12:30</td>
                                <td>14:00</td>
                                <td>
                                    <Link to="kitchen">
                                        <Boton text={"Ver"} allstyles={"buttonKitchenTable"} />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default TableWaiter;