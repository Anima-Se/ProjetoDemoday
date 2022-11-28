import React from 'react';
import './etapa.css';
import InputCad from '../Input';

function cadastro_02(){

    return(

    <>
  

        <div className='estagios'>

            <div id='ballPreen'></div>
            <div id='ballPreen'></div>
            <div id='ball'></div>
            <div id='ball'></div>

        </div>
        <div >
            <form action="" className='form01'>

                <InputCad fundo="Seu Email" tipo="email"/>
                <InputCad fundo="Telefone" tipo="tel"  />
                <InputCad fundo="CPF" tipo="text"/>
                <InputCad fundo="Dia/Mês/Ano" tipo="date"/>
                
           
            </form>
        </div>
    </>
        
    
);
}

export default cadastro_02;

