import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Boton from '../Boton/Boton'
import TableWaiter from '../Tables/Tablewiter';

const WaiterRegister = () => {
    return (
    <Fragment>
        <h1>Estoy en la vista 5 Esther</h1>

        <TableWaiter />


        <Link to="waiter">
        
        <Boton text={"Regresar"} allstyles={"pagina-5-Esther"} />  
        </Link>   

    </Fragment>
);
}

export default WaiterRegister;