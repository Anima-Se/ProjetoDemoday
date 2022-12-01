import React, { useState } from 'react';
import './cadastro.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BtnSlide from '../../Components/btn-slide/btn-slide'

//imgs
import Seta from "../../img/seta.png";


import Cadastro_01 from '../../Components/etapa_cadastro/cadastro_01';
import Cadastro_02 from '../../Components/etapa_cadastro/cadastro_02';
import Cadastro_03 from '../../Components/etapa_cadastro/cadastro_03';
import Cadastro_04 from '../../Components/etapa_cadastro/cadastro_04';



function Cadastro() {

    const [estado, setEstado] = useState(0);

    const alterar = () => {
        setEstado(estado + 1);
    }

    //objeto cadastro

    const cadastro = {

        id_usuario: 0,
        nome: '',
        email: '',
        senha: '',
        telefone: '',
        cpf: '',
        data_nascimento: '',
        cep: '',
        endereco: '',
        num_logradouro: '',
        complemento: ''

    }



    const [btnCad, setBtnCad] = useState(true);
    const [Cadastro, setCadastro] = useState([]);

    const [objcadastro, setObjcadastro] = useState(cadastro);


    //obtendo os dados do form

    const digitando = (e) => {
         setCadastro({ ...objcadastro, [e.target.name]: e.target.value });
        

    }




    return (
        <div className='background'>


            <p>{JSON.stringify(objcadastro)}</p>
            <div className='div_pai'>
                <div className='container' >

                    <div className='login_cadastro'>

                        <BtnSlide />
                        
                    </div>

                    <div className='box'>

                        {estado === 0 ? <Cadastro_01 trocar={alterar} eveTeclado={digitando} btn={btnCad} /> : ""}
                        {estado === 1 ? <Cadastro_02 trocar={alterar} eveTeclado={digitando} btn={btnCad} /> : ""}
                        {estado === 2 ? <Cadastro_03 trocar={alterar} eveTeclado={digitando} btn={btnCad} /> : ""}
                        {estado === 3 ? <Cadastro_04 trocar={alterar} eveTeclado={digitando} btn={btnCad} /> : ""}

                    </div>

                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cadastro;