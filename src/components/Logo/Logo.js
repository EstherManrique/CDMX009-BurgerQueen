import React from 'react';
import Logo_BQ from '../../assets/imgs/Logo_BQ.png';
import styles from './Logo.module.css';

const Logo = () => (

    <div className={styles.logoWrapper}>
        <img className={styles.logoLogin} src={Logo_BQ} alt="" />
    </div>
);

export default Logo