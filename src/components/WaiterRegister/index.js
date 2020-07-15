import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Boton from '../Boton/Boton'
import TableWaiter from '../Tables/TableWaiter';

const WaiterRegister = () => {

    return (
        <Fragment>
            
            <TableWaiter />

            <Link to="waiter">
                <Boton text={"Regresar"} allstyles={"pagina-5-Esther"} />
            </Link>


            <Link to="waiteraccount">
                <Boton text={"Editar"} allstyles={"buttonOutWaiter"} />
            </Link>

        </Fragment>
    );
};

export default WaiterRegister;