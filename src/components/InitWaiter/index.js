import React, { useState } from 'react';
import LogoSmall from '../../assets/imgs/Logo_BQ.png';
import ImgWaiter from '../../assets/imgs/waiter.png';
import ImgCostumer from '../../assets/imgs/Costumer.png';
import ImgTable from '../../assets/imgs/Table.png';
import ImgUtensils from '../../assets/imgs/Trastes.jpg';
import PeopleFood from '../../assets/imgs/people-food.jpg';
import Breakfast from '../../assets/imgs/coffe-break.png';
import Lunch from '../../assets/imgs/burger-lunch.jpg';
//import {db} from '../../firebase'

import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import Boton from '../Boton/Boton';
import DateTime from '../DateTime/DateTime';
import Select from 'react-select';
//import BreaFast from '../BreakFast/index'


const options = [
  { value: 1, label: 'Taco López' },
  { value: 2, label: 'Regina Phalangee' },
  { value: 3, label: 'Phoebe Buffay' }
]

const InitWaiters = ({ client, setClient }) => {
  const handleInputsClient = (e) => {
    const {name, value} = e.target;
    setClient({...client, [name]: value});
    //console.log(name, value);
    
  }

  //funcion para boton ordenar (enviar los datos de los inputs a ??)
  const handleOrder = (e) => {
    e.preventDefault();
    console.log(client);
/*     crudDataFB() */
  }

/*    const crudDataFB = async (dataObject) => {
    await db.collection('BQ-Pruebas').doc().set(dataObject);
    console.log('Se mandaron datos a firebase');
  }  */

/*     const addCommunData = () => {
    console.log('pasando los datos comunes');
  } */


  return (
    <div>
      {/* <Breakfast crudDataFB={crudDataFB}/> */}
      <div className={styles.headerInitWaiter}>
        <img src={LogoSmall} className={styles.logoSmall} alt="" />
        <div className={styles.reg_date}>
          {/* <button onClick={handleOrder}> Ordenar</button> */}
          <Boton text={"Ordenar"} allstyles={"buttonGoRgWaiter "} onClick={handleOrder}/>
          <Boton text={"Registros"} allstyles={"buttonGoRgWaiter "} />
          <DateTime />
        </div>
      </div>

      <div className={styles.initWaiter}>
        <div>
          <div className={styles.dataWaiter}>
            <img src={ImgWaiter} className={styles.imgWaiter} alt="" />
            <Select 
            options={options} 
            className={styles.nameWaiter} 
            name="namewaiter"
            //onChange={handleInputsClient}
            />
            
            {/* <input type="text" placeholder="Nombre del Mesero" className={styles.nameWaiter} /> */}
          </div>

          <div className={styles.dataCostumer}>
            <img src={ImgCostumer} className={styles.imgCostumer} alt="" />
            <div className={styles.dataUtensils}>
              <img src={ImgUtensils} className={styles.imgUtensils} alt="" />
              <input 
              type="text" 
              placeholder="Ingrese Nombre del Cliente" 
              className={styles.nameCostumer} 
              name="nameclient"
              onChange={handleInputsClient}/>
            </div>
          </div>

          <div className={styles.dataTable}>
            <img src={ImgTable} className={styles.imgTable} alt="" />

            <div className={styles.dataTableLabel}>
              <div className={styles.numberTable} >
                <p> No. Mesa </p>
                <label htmlFor="">
                  <input 
                  type="text" 
                  placeholder="No." 
                  className={styles.numberTableData} 
                  name="numtable"
                  onChange={handleInputsClient}
                  />
                </label>
              </div>
            </div>

            <div className={styles.numberPeople}>
              <p>No. Personas</p>
              <label htmlFor="">
                <input 
                type="text" 
                placeholder="No." 
                className={styles.numberPeopleData} 
                name="numpeople"
                onChange={handleInputsClient}/>
              </label>
            </div>
          </div>
          <div className={styles.footerWaiter}>

            <Link to="/login">
              <Boton text={"Salir"} allstyles={"buttonOutWaiter"} />
            </Link>

            <img src={PeopleFood} className={styles.peopleFood} alt="" />
          </div>
        </div>

        <div className={styles.containerFood}>

          <Link to="/breakfast" className={styles.lineLinks}>
            <div className={styles.bgFoodBreak}>
              <img src={Breakfast} alt="" className={styles.imageFood} />
              <p className={styles.titleMenu}>Desayunos</p>
            </div>
          </Link>

          <Link to="restday" className={styles.lineLinks}>
            <div className={styles.bgFoodLunch}>
              <img src={Lunch} alt="" className={styles.imageFood} />
              <p className={styles.titleMenu}>Comidas y Cenas</p>
            </div>
          </Link>
        </div>

      </div>

    </div>

  );
}

export default InitWaiters;