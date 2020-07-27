import React from 'react';
import styles from './styles.module.css';
import DateTime from '../DateTime/DateTime';
import Stepper from "@kiwicom/orbit-components/lib/Stepper";

import IconDelete from '../../assets/imgs/trash.png';

const ReusableTable = ({ client }) => {
    // console.log("xxxxxx", client)

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
                        <span className={styles.firstNumberWrapper}>123</span>
                    </div>
                </div>
            </div>

            <div className={styles.separation}></div>

            <div className={styles.customerOrders}>
                <div className={styles.Orders}>
                    <div className={styles.foodOptions}>
                        {client.items.map(
                            c =>
                                <span>{c.name}</span>
                        )}
                    </div>
                    <div className={styles.StepperStateless}><Stepper minValue={0} maxValue={100} /></div>
                    <div className={styles.deleteIcon}><img src={IconDelete} alt="" width={35} height={"auto"} /></div>
                </div>

                <div className={styles.Orders}>
                    <div className={styles.foodOptions}>
                        {client.items.map(
                            c =>
                                <span>{c.name}</span>
                        )}
                    </div>
                    <div className={styles.StepperStateless}><Stepper minValue={0} maxValue={100} /></div>
                    <div className={styles.deleteIcon}><img src={IconDelete} alt="" width={35} height={"auto"} /></div>
                </div>

                <div className={styles.Orders}>
                    <div className={styles.foodOptions}>
                        {client.items.map(
                            c =>
                                <span>{c.name}</span>
                        )}
                    </div>
                    <div className={styles.StepperStateless}><Stepper minValue={0} maxValue={100} /></div>
                    <div className={styles.deleteIcon}><img src={IconDelete} alt="" width={35} height={"auto"} /></div>
                </div>

                <div className={styles.Orders}>
                    <div className={styles.foodOptions}>
                        {client.items.map(
                            c =>
                                <span>{c.name}</span>
                        )}
                    </div>
                    <div className={styles.StepperStateless}><Stepper minValue={0} maxValue={100} /></div>
                    <div className={styles.deleteIcon}><img src={IconDelete} alt="" width={35} height={"auto"} /></div>
                </div>
            </div>
        </div>
    );
}
export default ReusableTable;