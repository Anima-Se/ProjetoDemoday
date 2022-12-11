import React from 'react';
import './pergunta.css';

import Elipse1 from '../../img/Ellipse_3.png';
import Elipse2 from '../../img/Ellipse_2.png';
import Patas from '../../img/Patas.png';
import SetaVoltar from "../../img/setaVoltar.png";

import { Link } from 'react-router-dom';
// import { Container } from './styles';

function Pergunta() {
  return (
    <div className='divpai'>
      <div className='fundo'>
        <img src={Elipse1} className='elipse1' />
        <img src={Elipse2} className='elipse2' />
        <img src={Patas} className='patas' />
      </div>
      <div className="divSeta">
          <Link to={"/"}>
            <img src={SetaVoltar} alt="" />
          </Link>
        </div>
      <div className='escolha'>
        
        <Link to={"/Pets"}>
          <button className='adotar'>ADOTAR</button>
        </Link>

        <h5>OU</h5>

        <Link to={"/CadastroPet"}>
          <button className='doar'>DOAR</button>
        </Link>

      </div>
    </div>
  );
}

export default Pergunta;