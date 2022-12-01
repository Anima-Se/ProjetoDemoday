import React from 'react';
import './etapa.css';
import InputCad from '../Input';
import imgBtn from '../../img/seta.png';

function cadastro_02({trocar , eveTeclado}){

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

                <InputCad fundo="Nome" onChange={eveTeclado} name='nome' tipo="email"/>
                <InputCad fundo="Telefone" onChange={eveTeclado} name='telefone'tipo="tel"  />
                <InputCad fundo="CPF" onChange={eveTeclado} name='cpf' tipo="text"/>
                <InputCad fundo="Dia/Mês/Ano" onChange={eveTeclado}  name='data_nascimento' tipo="date"/>
                
           
            </form>
        </div>

        <div className='divImg'>
                <img className='imgNext' src={imgBtn} alt="botao proximo" onClick={trocar} />

            </div>
    </>
        
    
);
}

export default cadastro_02;

