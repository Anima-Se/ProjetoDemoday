import React from 'react';
import './style.css';

const btnComecar = ({ txtBtn }) => {
    if (txtBtn === "Começar") {
        return (

            <button id='btnComecar'>{txtBtn}</button>

        );
    } else {
        return (

            <button id='btnComecar'>{txtBtn}</button>
        )
    }

}

export default btnComecar;