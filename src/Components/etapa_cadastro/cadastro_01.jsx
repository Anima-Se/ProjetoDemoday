
import React from 'react';
import './etapa.css';
import InputCad from '../Input';


function Cadastro_01() {

    return (

        <div className='pai_cad01'>

            <div className='estagios'>
                <div id='ballPreen'></div>
                <div id='ball2'></div>
                <div id='ball3'></div>
                <div id='ball4'></div>
            </div>


            <div >
                <form action="" className='form01'>

                    <InputCad fundo="Seu Email" tipo="email"/>
                    
                    <div className='olho'>

                        <InputCad fundo="Sua Senha" tipo="password"/>

                    </div>

                    <InputCad fundo="Confirmar Senha" tipo="password"/>
                    
                </form>
            </div>
        </div>

    );
}

export default Cadastro_01;

