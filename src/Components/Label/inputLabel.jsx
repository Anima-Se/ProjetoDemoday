import React from 'react';
import './inputLabel.css';

const label = (({texto,tipo,fundo}) =>{
    return(
        <>
            <label>{texto}</label>
            <input type={tipo} placeholder={fundo}/>
        </>
    )   
})

export default label;
