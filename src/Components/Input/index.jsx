import React from 'react';
import './inputs.css';

const InputCad = (({tipo,fundo}) =>{
    return(
        <>
            <input type={tipo} placeholder={fundo}/>
        </>
    )   
})


export default InputCad;