import React from 'react';
import './style.css'

const Button = ({ allstyles, text }) => (
    <button className={allstyles}> {text}
    </button>
);

export default Button