import React from 'react';
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
    return (
        <div className='background'>


        <div className='div_pai'>

            <div className='container' >

                <div className='login_cadastro'>

                    <BtnSlide />

                </div>

                <div className='box'>

                    <Cadastro_01/>

                </div>

                <div className='box_btn'>

                    <img src={Seta} className='imagemseta' />

                </div>

            </div>
        </div>
        </div>
    );
}

export default Cadastro;