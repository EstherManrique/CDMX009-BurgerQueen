import React, { useState } from 'react';
import 'firebase/app';
import db from '../../firebase';
import InitWaiter from '../InitWaiter/index'



const RestDay = () => {

    const addData = () => {

        console.log('new data entered by the waiter', client)


        // console.log(client);
        // db.collection('data').doc().set(objectsData);

    }

    return (


        <div>

            <InitWaiter={addData}/>


        </div>
    );
}
export default RestDay;


