import React from 'react';
import InputCad from '../Input';
import imgDog from '../../img/dog_cadastro.png';

function Cadastro_04() {
    return (
        <>
  

        <div className='estagios'>

            <div id='ballPreen'></div>
            <div id='ballPreen'></div>
            <div id='ballPreen'></div>
            <div id='ballPreen'></div>

        </div>
        <div >
            <form action="" className='form01'>
                <img src={imgDog} className="imgDog"/>
                <InputCad fundo="Apelido" tipo="text"/>
      
                
           
            </form>
        </div>
    </>
    )
}

export default Cadastro_04
