import React, { useEffect, useState }  from 'react';
import Logo from '../Logo/Logo';
import Boton from '../Boton/Boton';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import KitchenTable from '../ReusableTable/kitchenTable';
import { useParams} from 'react-router-dom'
import db from '../../firebase';

import Bell from '../../assets/imgs/cuadrado-bordes.png';

const Kitchen = ({ client, setClient }) => {

    const [order, setOrder ] = useState();
    
    const { orderId } = useParams()
    
    useEffect(() => {
        db.collection('ordersfood').doc(orderId).get().then((querySnapshot) => {
                     
        
        setOrder(querySnapshot.data());
 
        });
    }, [])

    let texto = 'Orden lista en cocina, enviando notificación a mesero'
    const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    //texto.preventDefault();
    //hablar(texto);

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
                   {order && <KitchenTable client={client} setClient={setClient} order={order} />} 
                </div>

                <div className={styles.thirdDivision}>

                    <div className={styles.checkInTime}>
                        <p>Hora de Entrada</p>
                        <span className={styles.firstNumberWrapper}>3:50pm</span>
                    </div>

                    {/* <button onClick={hablar()}>Notificar</button> */}

                    <div className={styles.printAccount}>
                        <button  onClick={() => hablar(texto)} >
                            <img src={Bell} alt="" className={styles.printImg} />
                        </button>   
                    </div>

                    <div className={styles.departureInTime}>
                        <p>Hora de salidas</p>
                        <span className={styles.firstNumberWrapper}>4:20pm</span>
                    </div>

                </div>
            </div>


            <div className={styles.routeButtonsAccount}>

                <Link to="/kitchenregister">
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