import React, { useState, useEffect, } from 'react';
import styles from './styles.module.css';
import DateTime from '../DateTime/DateTime';
import Stepper from "@kiwicom/orbit-components/lib/Stepper";


import db from '../../firebase';


import IconDelete from '../../assets/imgs/trash.png';

const ReusableTable = ({ client, setClient, order, setOrder, menubreak, setMenuBreak }) => {
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
        <div className={styles.containerTable}>

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
                        <span className={styles.firstNumberWrapper}>{order}</span>
                    </div>
                </div>
            </div>

            <div className={styles.separation}></div>

            <div className={styles.customerOrders}>
                <div className={styles.Orders}>
                    <div className={styles.foofOptions}>Café americano</div>
                    <div className={styles.StepperStateless}><Stepper minValue={0} maxValue={100} /></div>
                    <div className={styles.deleteIcon}><img src={IconDelete} alt="" width={35} height={"auto"} /></div>
                </div>

                <div className={styles.Orders}>
                    <div className={styles.foofOptions}>Hamburguesa Simple</div>
                    <div className={styles.StepperStateless}><Stepper minValue={0} maxValue={100} /></div>
                    <div className={styles.deleteIcon}><img src={IconDelete} alt="" width={35} height={"auto"} /></div>
                </div>

                <div className={styles.Orders}>
                    <div className={styles.foofOptions}>Café americano</div>
                    <div className={styles.StepperStateless}><Stepper minValue={0} maxValue={100} /></div>
                    <div className={styles.deleteIcon}><img src={IconDelete} alt="" width={35} height={"auto"} /></div>
                </div>

                <div className={styles.Orders}>
                    <div className={styles.foofOptions}>Café con leche</div>
                    <div className={styles.StepperStateless}><Stepper minValue={0} maxValue={100} /></div>
                    <div className={styles.deleteIcon}><img src={IconDelete} alt="" width={35} height={"auto"} /></div>
                </div>
            </div>
        </div>
    );
}
export default ReusableTable;