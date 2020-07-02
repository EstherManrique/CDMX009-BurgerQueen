import React from 'react';
import { Link } from 'react-router-dom';
import BurgerLogin from '../../assets/imgs/BurgerLogin1.png';
import Waiter from '../../assets/imgs/waiter.png';
import HatCheff from '../../assets/imgs/hat-chef.png';

import styles from './BackgLogin.module.css'
import Logo from '../Logo/Logo';


const BackgLogin = () => (
    <div className={styles.containerLogin}>
        <Logo />
        <div className={styles.triangle}>

            <img className={styles.burgerLogin} src={BurgerLogin} alt="" />

            <Link to="/waiter">
            <img className={styles.IconWaiter} src={Waiter} alt="" />
            <button type="button" className={styles.buttonWaiter}>Mesero</button>
            
            
            </Link>

            {/* Agregar ruta Link */}
            <img className={styles.IconHatCheff} src={HatCheff} alt="" />
            <button type="button" className={styles.buttonChef}>Cocina</button>

        </div>

    </div>
);

export default BackgLogin;
