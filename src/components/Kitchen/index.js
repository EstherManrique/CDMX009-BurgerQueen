import React from 'react';
import Logo from '../Logo/Logo';
import Boton from '../Boton/Boton';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import KitchenTable from '../ReusableTable/kitchenTable';

import Bell from '../../assets/imgs/cuadrado-bordes.png';

const Kitchen = ({ client, setClient, order, setOrder, orders }) => {

    return (
        <div>
            <div className={styles.headerWrapper}>
                <div className={styles.logoRestD}>
                    <Logo nameClass={"logoSmallLunch"} />
                </div>
                <div className={styles.iconHeader}>
                    <h2>Cocina</h2>
                    <span className={styles.iconWaiterRestDay}></span>
                </div>
            </div>

            <div className={styles.contentDivision}>
                <div className={styles.firstDivision}>
                    <span className={styles.imageDecoration}></span>
                </div>

                <div className={styles.secondDivision}>
                    <KitchenTable client={client} setClient={setClient} order={order} setOrder={setOrder} orders={orders}/>
                </div>

                <div className={styles.thirdDivision}>

                    <div className={styles.checkInTime}>
                        <p>Hora de Entrada</p>
                        <span className={styles.firstNumberWrapper}>3:50pm</span>
                    </div>

                    <div className={styles.printAccount}>
                        <img src={Bell} alt="" className={styles.printImg} />
                    </div>

                    <div className={styles.departureInTime}>
                        <p>Hora de salidas</p>
                        <span className={styles.firstNumberWrapper}>4:20pm</span>
                    </div>

                </div>
            </div>


            <div className={styles.routeButtonsAccount}>

                <Link to="kitchenregister">
                    <Boton text={"Regresar"} allstyles={"return"} />
                </Link>

                <div>
                    <span className={styles.imageDecorationtwo}>
                    </span>
                </div>
            </div>

        </div>
    );
}

export default Kitchen;