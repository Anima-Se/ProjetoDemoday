import React from 'react';
import './etapa.css';
import InputCad from '../Input';



function cadastro_03(){

    return(

        <>
  

        <div className='estagios'>

            <div id='ballPreen'></div>
            <div id='ballPreen'></div>
            <div id='ballPreen'></div>
            <div id='ball'></div>

        </div>
        <div >
            <form action="" className='form01'>

                <InputCad fundo="CEP" tipo="text"/>
                <InputCad fundo="Endereco" tipo="text"  />
                <InputCad fundo="N" tipo="text"/>
                <InputCad fundo="Complemento" tipo="text"/>
                
           
            </form>
        </div>
    </>
    
);
}

export default cadastro_03;

