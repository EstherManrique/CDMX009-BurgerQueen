import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Boton from '../Boton/Boton'
import styles from './styles.module.css';
import DateTime from '../DateTime/DateTime';
import Logo from '../Logo/Logo';
import Coffe from '../../assets/imgs/american-coffe.jpg';
import CoffeMilk from '../../assets/imgs/coffe-milk.jpg';
import Sandwich from '../../assets/imgs/sandwich.jpg';
import Juice from '../../assets/imgs/orange-juice.jpg'

const BreakFast = (props) => { const initOrder = {
        coiffeeBlack: '',
        coffeeMilk: '',
        juice: '',
        sandwich: ''
    }

    const [order, setOrder] = useState(initOrder);

    const addOrder = (data, e) => {
        const {name, value} = e.target;        
        setOrder({
            ...order,
            data
        });
        console.log('me puchassss', data, e)
    }


    return (
        <div className={styles.breakFastPage}>
            <div className={styles.headerWrapper}>
                <div className={styles.logoBreakFast}>
                    <Logo nameClass={"logoSmallLunch"} />
                </div>
                    <h2>Desayunos</h2>
                <div className={styles.iconHeader}>
                    <span className={styles.iconWaiterBreakFast}></span>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.menuBreakfast}>
                    <div className={styles.breakfast}>

                        <button className={styles.bgMenu} onClick={addOrder} name="coffeeBlak">
                            <img src={Coffe} alt=""/>
                            <h3 name="Cafe-Americano">Cafe Americano <br/> $5.00</h3>
                        </button>

                        <button className={styles.bgMenu} onClick={addOrder} name="coffeeMilk">
                            <img src={CoffeMilk} alt=""/>
                            <h3>Cafe con Leche <br/> $7.00</h3>
                        </button>
                    </div>

                    <div className={styles.breakfast}>
                        <button className={styles.bgMenu} onClick={addOrder} name="sandwich">
                            <img src={Sandwich} alt=""/>
                            <h3>Sandwich <br/> $10.00</h3>
                        </button>
                    
                        <button className={styles.bgMenu} onClick={addOrder} name="juice">
                            <img src={Juice} alt=""/>
                            <h3>Jugo <br/> $7.00</h3>
                        </button>
                    </div>                               
                </div>

                <div className={styles.order}>
                    <DateTime />

                    <i className="material-icons">edit</i>

                    <div className={styles.dataTableLabel}>
                        <div className={styles.numberTable} >
                            <p> No. Mesa {props.client.numtable}</p>
                            <label htmlFor="">
                            <input type="text" placeholder="No." className={styles.numberTableData} />
                            </label>
                        </div>
                    </div>

                    <div className={styles.numberPeople}>
                        <p>No. Personas</p>
                        <label htmlFor="">
                            <input type="text" placeholder="No." className={styles.numberPeopleData} />
                        </label>
                    </div>
                <ul>
                    <li>
                        Cafe Americano {}  Cant {}
                    </li>
                    <li>
                        Cafe con Lecge {}  Cant {}
                    </li>
                    <li>
                        Jugo {}  Cant {}
                    </li>
                    <li>
                        Sandwich {}  Cant {}
                    </li>
                </ul>






                </div>
            </div>

            <Link to="waiter">
                <Boton text={"Regresar"} allstyles={"buttonOutWaiter"} />
            </Link>

            <Link to="waiterregister">
                <Boton text={"Ir Pag-5"} allstyles={"pagina-3-Esther"} />
            </Link>  

        </div>
    );
}

export default BreakFast;