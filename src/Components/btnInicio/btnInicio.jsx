import React from 'react';
import './style.css';

const btnComecar = ({txtBtn}) => {
    if (txtBtn == "Começar"){
        return (

            <button id='btnComecar'>{txtBtn}</button>
    
        );
    } else if (txtBtn == "Conhecer"){
        return (

            <button id='btnCard'>{txtBtn}</button>
    
        );
    } else if (txtBtn == "Vamos lá!"){
        return (
            
            <button id='btnAprender'>{txtBtn}</button>
        )
    }
    
}

export default btnComecar;