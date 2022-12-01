import React from 'react';
import './etapa.css';
import InputCad from '../Input';
import imgBtn from '../../img/seta.png';



function cadastro_03({trocar , btn , eveTeclado}){

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

                <InputCad fundo="CEP" onchange={eveTeclado} name='cep'  tipo="text"/>
                <InputCad fundo="Endereco"   onchange={eveTeclado} name='endereco'  tipo="text"  />
                <InputCad fundo="N"  onchange={eveTeclado} name='num_logradouro' tipo="text"/>
                <InputCad fundo="Complemento"  onchange={eveTeclado} name='complemento' tipo="text"/>
                
           
            </form>
        </div>

        <div className='divImg'>
                <img className='imgNext' src={imgBtn} alt="botao proximo" onClick={btn} />

            </div>
    </>
    
);
}

export default cadastro_03;

