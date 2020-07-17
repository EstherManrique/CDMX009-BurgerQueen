import React from 'react';
import ReusableProducts from '../ReusableProducts/index';

import Eggs from '../../assets/imgs/eggs.jpg';
import Cola from '../../assets/imgs/cola.jpg';
import Fries from '../../assets/imgs/fries.jpg';
import Chess from '../../assets/imgs/chess.jpg';
import Water from '../../assets/imgs/water-bottle.jpeg';
import OnionRings from '../../assets/imgs/onion-rings.jpg';
import DobleBurger from '../../assets/imgs/doble-burger.jpg';
import SimpleBurger from '../../assets/imgs/simple-burger.jpg';


const Products = {
    "burgers": [
        {
            value: 1,
            label: <ReusableProducts img={SimpleBurger} text={"Hamburguesa Simple"} price={10} allStyles={"containerProduct"} />
        },

        {
            value: 2,
            label: <ReusableProducts img={DobleBurger} text={"Hamburguesa Doble"} price={15} allStyles={"containerProduct"} />
        },
    ],
    "drinks": [
        {
            value: 1,
            label: <ReusableProducts img={Water} text={"Agua 500ml"} price={5} allStyles={"containerProduct"} />
        },

        {
            value: 2,
            label: <ReusableProducts img={Water} text={"Agua 750 ml"} price={7} allStyles={"containerProduct"} />
        },
        {
            value: 3,
            label: <ReusableProducts img={Cola} text={"Gaseosa 500 ml"} price={7} allStyles={"containerProduct"} />
        },

        {
            value: 4,
            label: <ReusableProducts img={Cola} text={"Gaseosa 750 ml"} price={10} allStyles={"containerProduct"} />
        },
    ],
    "additionalOptions": [
        {
            value: 1,
            label: <ReusableProducts img={OnionRings} text={"Aros de Cebolla"} price={5} allStyles={"containerProduct"} />
        },

        {
            value: 2,
            label: <ReusableProducts img={Fries} text={"Papas Fritas"} price={5} allStyles={"containerProduct"} />
        },
    ],
    "additionals": [
        {
            value: 1,
            label: <ReusableProducts img={Eggs} text={"Huevos"} price={1} allStyles={"containerProduct"} />
        },

        {
            value: 2,
            label: <ReusableProducts img={Chess} text={"Queso"} price={1} allStyles={"containerProduct"} />
        },

    ]

}

export default Products;