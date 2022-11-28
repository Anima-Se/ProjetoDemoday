
import React from 'react';
import './inputLabel.css';

const label = (({texto, tipo, fundo}) =>{
    return(
        <div className='labelCadastro'>
            <label>{texto}</label>
            <input type={tipo} placeholder={fundo}/>
        </div>
    )   
})

export default label;
