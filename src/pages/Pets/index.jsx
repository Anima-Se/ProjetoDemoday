import React from "react";
import Barra from "../../Components/Navbar";
import BarraConteudo from "../../Components/BarraConteudo/barraConteudo";
import TopoFiltro from "../../Components/filtro/topoFiltro";
import TipoFiltro from "../../Components/filtro/tipoFiltro";
import DivFiltro from "../../Components/filtro/divFiltro";
import AnuncioPet from "../../Components/AnuncioPet/anuncio";
import CachorroPets from '../../img/cachorroPets.jpg';
import PapagaioPets from '../../img/papagaio.jpg';
import GatoPets from '../../img/gatoPets.jpg';
import CachorroPets2 from '../../img/cachorroPets2.jpg';
import CoelhoPets from '../../img/coelho.jpg';
import CachorroPets3 from '../../img/cachorroPets3.jpg';



import "./style.css";
import '../../Components/filtro/filtro.css';





function Pets() {

    return (
        <>
            <div>
                <Barra />
            </div>

            <main className="mainPet">

                <section className="filtro">
                    <TopoFiltro />
                    <TipoFiltro titulo="Distância" resultado="15Km" />
                    <DivFiltro nomeOpcao="Porte" op1="Pequeno" op2="Médio" op3="Grande"/>
                    <DivFiltro nomeOpcao="Idade" op1="Filhote" op2="Adulto" op3="Sênior" />
                    <DivFiltro nomeOpcao="Animal" op1="Cachorro" op2="Gato" op3="Aves" op4="Roedores" op5="Outros" />
                </section>
                
                <div className="petsbox">
                    <div className="cima">
                        <BarraConteudo />
                    </div>
                    <div className="baixo">
                        <AnuncioPet imgPets={CachorroPets} nomePet="Mel" sexo="Fêmea" idade="7 anos" doador="Ong Céu Azul"/>
                        <AnuncioPet imgPets={PapagaioPets} nomePet="Tico" sexo="Macho" idade=" 9 meses" doador="João Silva"/>
                        <AnuncioPet imgPets={GatoPets} nomePet="Bolinha" sexo="Fêmea" idade="1 ano" doador="Ong Girassol"/>
                        <AnuncioPet imgPets={CachorroPets3} nomePet="Laika" sexo="Fêmea" idade="3 meses" doador="Ong Laço Forte"/>
                        <AnuncioPet imgPets={CoelhoPets} nomePet="Lily" sexo="Fêmea" idade="1 ano" doador="Ong Céu Azul"/>
                        <AnuncioPet imgPets={CachorroPets2} nomePet="Bob" sexo="Macho" idade="8 anos" doador="Maria Santos"/>
                    </div>
                </div>
            </main>
        </>


    );

}

export default Pets;
