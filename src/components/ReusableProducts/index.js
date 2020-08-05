import React from 'react';
import './style.css';

const ReusableProducts = ({ img, text, price, allStyles }) => {
    return (
        <div className={allStyles}>
            <img src={img} height="200" width="200px" alt="" />
            <p>{text}</p>
            <p>{price}</p>
        </div>
    );
}
export default ReusableProducts;

