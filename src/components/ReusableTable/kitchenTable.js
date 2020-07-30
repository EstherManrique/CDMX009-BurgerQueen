import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import DateTime from '../DateTime/DateTime';
import {products} from '../../utils/products.js'

/* import db from '../../firebase'; */



const KitchenTable = ({ client, setClient, orders, setOrders }) => {

/*     useEffect(() => {

        db.collection('ordersfood').get().then((querySnapshot) => {
            const data = []
            querySnapshot.forEach(function (doc) {
                data.push(doc.data());
            });
            setClient(data);
            
        });        
    }, []); */

    return (
        <div className={styles.containerTableKitchen}>

            <div className={styles.DateOfOrderWrapprer}>
                <div className={styles.positionDate}><DateTime /> </div>

                <div className={styles.positionData}>
                    <div className={styles.numberTable}>
                        <p>No. Mesa</p>
                        <span className={styles.firstNumberWrapper}>{client.numtable}</span>
                    </div>

                    <div className={styles.numberPeople}>
                        <p>No. Personas</p>
                        <span className={styles.firstNumberWrapper}>
                            {client.numpeople}
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
                <div className={styles.Ordersforkitchen}>
                    <div className={styles.foodOptionsKitchen}>{products.name}</div>
                    <div className={styles.foodprice}>5</div>
                </div>

                <div className={styles.Ordersforkitchen}>
                    <div className={styles.foodOptionsKitchen}>{products.name}</div>
                    <div className={styles.foodprice}>5</div>
                </div>

                <div className={styles.Ordersforkitchen}>
                    <div className={styles.foodOptionsKitchen}>{products.name}</div>
                    <div className={styles.foodprice}>555</div>
                </div>

                <div className={styles.Ordersforkitchen}>
                    <div className={styles.foodOptionsKitchen}>{products.name}</div>
                    <div className={styles.foodprice}>5</div>
                </div>
            </div>
        </div>
    );
}

export default KitchenTable;