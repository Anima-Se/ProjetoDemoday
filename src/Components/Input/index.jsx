import React from 'react';
import './inputs.css';

const InputCad = (({tipo,fundo,acao , nome , valor}) =>{
    return(
        <>
            <input type={tipo} value={valor} placeholder={fundo}  onChange={acao} name={nome}/>
        </>
    )   
})


export default InputCad;