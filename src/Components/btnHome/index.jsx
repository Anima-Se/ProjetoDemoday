import React from 'react';
import './style.css';
// import { Container } from './styles';

const btnHome = (({ texto, cor}) => {
    if (cor == "roxo") {
        return (

            <div>
                <button id='btnRoxo'>{texto}</button>
            </div>
        )
    }
    else if (cor == "verde") {
        return (

            <div>
                <button id='btnVerde'>{texto}</button>
            </div>
        )
    }
    else if (cor == "limpar") {
        return (

            <div>
                <button id='limpar'>{texto}</button>
            </div>
        )
    }
    else if (cor == "laranja") {
        return (

            <div>
                <button id="btnLaranja">{texto}</button>
            </div>
            
        )
    }

})


export default btnHome; 

