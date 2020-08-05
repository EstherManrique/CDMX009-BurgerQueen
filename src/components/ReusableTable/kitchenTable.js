import React/* , { useEffect, useState } */ from 'react';
import styles from './styles.module.css';
import DateTime from '../DateTime/DateTime';
//import {products} from '../../utils/products.js'

/* import db from '../../firebase'; */



const KitchenTable = ({ order }) => {

    console.log(order)

    return (
        <div className={styles.containerTableKitchen}>

            <div className={styles.DateOfOrderWrapprer}>
                <div className={styles.positionDate}><DateTime /> </div>

                <div className={styles.positionData}>
                    <div className={styles.numberTable}>
                        <p>No. Mesa</p>
                        <span className={styles.firstNumberWrapper}>{order.numtable}</span>
                    </div>

                    <div className={styles.numberPeople}>
                        <p>No. Personas</p>
                        <span className={styles.firstNumberWrapper}>
                            {order.numpeople}
                        </span>
                    </div>

                    <div className={styles.numberOrder}>
                        <p>No. Órden</p>
                        <span className={styles.firstNumberWrapper}>123</span>
                    </div>
                </div>
            </div>

            <div className={styles.separation}></div>

            <div className={styles.customerOrderskitchen}>
                {order.items.map((item) => (
                    <div className={styles.Ordersforkitchen}>
                        <div className={styles.foodOptionsKitchen}>{item.name}</div>
                        <div className={styles.foodprice}>{item.quantity}</div>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default KitchenTable;