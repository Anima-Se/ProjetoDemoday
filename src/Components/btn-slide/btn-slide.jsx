import React from 'react';
import "./btn-slide.css";

import { Link } from 'react-router-dom';

function BtnSlide() {
    function esquerda(){
        document.getElementById("slide").style.margin = "0 50% 0 0"
        document.getElementById("login").style.color = "#fff"
        document.getElementById("registrar").style.color = "#010101"
    }

    function direita(){
        document.getElementById("slide").style.margin = "0 0 0 50%"
        document.getElementById("login").style.color = "#010101"
        document.getElementById("registrar").style.color = "#fff"
    }


    return(
            <div className='slider-btn'>
                <a onClick={esquerda} id="login">Entrar</a>
                <span className='slider' id='slide'></span>
                
                <a onClick={direita} id="registrar">Registrar</a>
            </div>
    )
}

export default BtnSlide;