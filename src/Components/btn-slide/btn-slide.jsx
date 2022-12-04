import React from 'react';
import "./btn-slide.css";

import { Link } from 'react-router-dom';


const BtnSlide = (({page}) =>{
    if(page == "entrar" ){
        return (
                <div className='slider-btn'>
                    <Link to={"/Login"}>
                        <a id="login">Entrar</a>
                    </Link>
                    
                    <span className='slider' id='slide'></span>
        
                    <Link to={"/Cadastro"}>
                        <a id="registrar">Registrar</a>
                    </Link>
                </div>
            )
    }
    if(page == "cadastro"){
        return (
            <div className='slider-btn'>
                <Link to={"/Login"}>
                    <a id="login2">Entrar</a>
                </Link>
                
                <span className='slider2' id='slide2'></span>
    
                <Link to={"/Cadastro"}>
                    <a id="registrar2">Registrar</a>
                </Link>
            </div>
        )
    }
})


export default BtnSlide;