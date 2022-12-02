
import React, { useState } from 'react';
import './etapa.css';
import InputCad from '../Input';
import imgBtn from '../../img/seta.png';


//  const saveUser = () => {
//     const [email, setEmail] = useState('');
//     const [senha, setSenha] = useState('');

//     function handleSaveUser(){
//         const data = {
//             email , senha
//         }

//         console.log(data);
//     }
// }

function Cadastro_01({ trocar, eveTeclado }) {


    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function handleSaveUser() {
        const data = {
            email, senha
        }

        console.log(data);
    }



    function digitando(e) {

        setEmail({ [e.target.name]: e.target.value })
        setSenha({ [e.target.name]: e.target.value })
        //e => setEmail(e.target.value)
    }




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
        <p> teste </p>
                    <InputCad
                        fundo="Seu Email"
                        onChange={digitando}
                        name='email'
                        tipo="email"
                        value={email} />
                    <InputCad
                        fundo="Sua Senha"
                        onChange={digitando}
                        name='senha'
                        tipo="password"
                        value={senha} />

                    <InputCad fundo="Confirmar Senha" onChange={eveTeclado} name='confimarSenha' tipo="password" />

                </form>

            </div>
            <div className='divImg'>
                <img className='imgNext' src={imgBtn} alt="botao proximo" onClick={handleSaveUser} />

            </div>
        </div>

    );
}

export default Cadastro_01;

