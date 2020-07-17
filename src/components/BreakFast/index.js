import React from 'react';
import { Link } from 'react-router-dom';

import Sandwich from '../../assets/imgs/sandwich.jpg';
import Juice from '../../assets/imgs/orange-juice.jpg';
import CoffeMilk from '../../assets/imgs/coffe-milk.jpg';
import Coffe from '../../assets/imgs/american-coffe.jpg';

import db from '../../firebase';
import Logo from '../Logo/Logo';
import Boton from '../Boton/Boton'
import styles from './styles.module.css';
import ReusableTable from '../ReusableTable/index';


const BreakFast = ({ client, setClient, order, setOrder, menubreak, setMenuBreak }) => {

/*     const handleButtonsBreak = (e) => {  //VA EN EL ONCHANGE
        const { name, value } = e.target;
        setMenuBreak({ ...menubreak, [name]: value });
    }
 */

    const handleOrderBreak = (e) => {  //VA EN EL ONCLICK
        e.preventDefault();
        db.collection('orders').add(menubreak)
          .then(() => {
            console.log('orden guardada en Firestore exitosamente')
          });
    }



    return (

        <div className={styles.breakFastPage}>

            <div className={styles.headerWrapper}>
                <div className={styles.logoBreakFast}>
                    <Logo nameClass={"logoSmallLunch"} />
                </div>
                <h2 className={styles.titleBreakfast}>Desayunos</h2>
                <div className={styles.iconHeader}>
                    <span className={styles.iconWaiterBreakFast}></span>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.menuBreakfast}>
                    <div className={styles.breakfast}>

                        <button
                        className={styles.bgMenu} 
                        onClick={handleOrderBreak} 
                        name="coffeblack"
                        >
                            <img src={Coffe} alt="" />
                            <h3>Cafe Americano <br /> $5.00</h3>
                        </button>

                        <button 
                        className={styles.bgMenu} 
                        onClick={handleOrderBreak} 
                        name="coffemilk"
                        >
                            <img src={CoffeMilk} alt="" />
                            <h3>Cafe con Leche <br /> $7.00</h3>
                        </button>
                    </div>

                    <div className={styles.breakfast}>
                        <button 
                        className={styles.bgMenu} 
                        onClick={handleOrderBreak} 
                        name="sandwich"
                        >
                            <img src={Sandwich} alt="" />
                            <h3>Sandwich <br /> $10.00</h3>
                        </button>
                        <button 
                        className={styles.bgMenu} 
                        onClick={handleOrderBreak} 
                        name="juice"
                        >
                            <img src={Juice} alt="" />
                            <h3>Jugo <br /> $7.00</h3>
                        </button>
                    </div>
                </div>

                <div className={styles.order}>
                    <div>
                        <ReusableTable client={client} setClient={setClient} order={order} setOrder={setOrder}
                        />
                    </div>
                </div>
            </div>

            <div className={styles.routeButtons}>
                <Link to="waiter">
                    <Boton text={"Regresar"} allstyles={"buttonOutWaiterBreack"} />
                </Link>

                <Link to="waiterregister">
                    <Boton text={"Enviar"} allstyles={"sendToKitchen"} />
                </Link>
            </div>
        </div>

    );

}

export default BreakFast;