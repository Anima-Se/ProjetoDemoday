import React from 'react';
import './inputLabel.css';

const label = (({texto,tipo,fundo, change, name, valor}) =>{
    return(
        <>
            <label>{texto}</label>
            <input onChange={change} value={valor} name={name} type={tipo} placeholder={fundo}/>
        </>
    )   
})

export default label;
