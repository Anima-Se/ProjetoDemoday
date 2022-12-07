import React from 'react';
import InputCad from '../Input';
import imgDog from '../../img/dog_cadastro.png';
import imgBtn from '../../img/seta.png';

function Cadastro_04({trocar }) {
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

        <div className='divImg'>
                <img className='imgNext' src={imgBtn} alt="botao proximo" onClick={trocar} />
                
            </div>
    </>
    )
}

export default Cadastro_04
