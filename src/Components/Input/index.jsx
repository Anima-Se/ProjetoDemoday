import React from 'react';
import './inputs.css';
import {useState} from 'react';

const InputCad = ({tipo,fundo , name, funcao, valor}) => {
    
    
    // const [valor, setMessage] = useState('');

    // const acao = event => {
    //     setMessage(event.target.value);
    
    //     console.log('Valor é:', event.target.value);
    // };


    return(
            <input type={tipo} placeholder={fundo} name={name} onChange={funcao} value={valor} />
    )   
}


export default InputCad;