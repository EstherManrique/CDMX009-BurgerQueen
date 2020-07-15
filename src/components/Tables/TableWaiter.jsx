import React from 'react';
import Logo from '../Logo/Logo';
import Table from 'react-bootstrap/Table'

import styles from './styles.module.css';
import './styles.css';




const TableWaiter = () => {

  return ( 
    <div>
        <div className={styles.headerWrapper}>
            <div className={styles.logoBreakFast}>
                <Logo nameClass={"logoSmallLunch"} />
             </div>
            <h2 className={styles.titleBreakfast}>Registro de Ordenes</h2>
            <div className={styles.iconHeader}>
                <span className={styles.iconWaiterBreakFast}></span>
            </div>
        </div>

        <div className={styles.table}>
        <Table striped bordered hover className="table-danger">
            <thead>
                <tr className={styles.columns}>
                    <th scope="col" >No. <br/> Orden</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">No. <br/>  Mesa</th>
                    <th scope="col">No. <br/> Personas</th>
                    <th scope="col">Hora <br/> Entrada</th>
                    <th scope="col">Hora <br/> Salida</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </Table>
        </div>

        
    </div>
    );
}
 
export default TableWaiter;