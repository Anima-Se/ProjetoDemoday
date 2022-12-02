import React from "react";
import './style.css';
import IconeCachorro from '..//../img/iconeCachorro.png';
import IconeGato from '..//../img/iconeGato.png';
import IconePeixe from '..//../img/iconePeixe.png';
import IconeCoelho from '..//../img/iconeCoelho.png';
import IconePapagaio from '..//../img/iconePapagaio.png';
import IconeTartaruga from '..//../img/iconeTartaruga.png';
import IconeHamster from '..//../img/iconeHamster.png';


function BarraConteudo(){

    return(
    
        <>
            <div className="barraConteudo">
                <img src={IconeCachorro} alt="Icone de cachorro" />
                <img src={IconeGato} alt="Icone de gato" />
                <img src={IconePeixe} alt="Icone de peixe" />
                <img src={IconeCoelho} alt="Icone de coelho" />
                <img src={IconePapagaio} alt="Icone de papagaio" />
                <img src={IconeTartaruga} alt="Icone de tartaruga" />
                <img src={IconeHamster} alt="Icone de hamster" />
            </div>
        </>

    );

}

export default BarraConteudo;

