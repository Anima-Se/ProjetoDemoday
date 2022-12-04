import React from 'react';
import './stylo.css';

import BtnSlide from '../../Components/btn-slide/btn-slide';
import InputCad from '../../Components/Input';
import { BsGoogle } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import Logo from '../../img/logo.png';
import {Link} from "react-router-dom";

function Login() {
    return (
        <div className='background'>
           <Link to={'/'}>
            <img
              src={Logo}
              width="180"
              className="d-inline-block align-right"
              alt="Anima-se Logo"
            />
          </Link>
            <div className='div_pai'>
                <div className='container' >
                    <div className="div-top">
                        <BtnSlide  page="entrar"/>
                    </div>
                    <form action="" className='entrar'>
                        <InputCad
                            fundo="Seu Email"
                            name='email'
                            tipo="email" />
                        <InputCad
                            fundo="Sua Senha"
                            name='senha'
                            tipo="password" />

                        <div className='divImg'>
                            <input type="submit" value="Entrar" />
                        </div>
                    </form>
                    <div className="linha-div">
                    </div>
                    <br />
                    <center><p>Entrar Com</p></center>

                    <div className="redes-sociais">
                        <BsGoogle />
                        <BsFacebook />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;