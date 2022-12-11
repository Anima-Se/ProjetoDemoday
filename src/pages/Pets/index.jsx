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
import Rodape from "../../Components/footer/footer";



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
                    <TipoFiltro titulo="Distância" resultado="01 Km" />
                    <h2 className="nomeTituloFiltro">Porte</h2>
                    <DivFiltro op="Pequeno"/>
                    <DivFiltro op="Médio" />
                    <DivFiltro op="Grande"/>
                    <hr/>
                    <h2 className="nomeTituloFiltro">Idade</h2>
                    <DivFiltro op="Filhote"/>
                    <DivFiltro op="Adulto"/>
                    <DivFiltro op="Sênior"/>
                    <hr/>
                    <h2 className="nomeTituloFiltro">Animal</h2>
                    <DivFiltro op="Aves"/>
                    <DivFiltro op="Cachorro"/>
                    <DivFiltro op="Gato"/>
                    <DivFiltro op="Peixes"/>
                    <DivFiltro op="Roedores"/>
                    <DivFiltro op="Outros"/>
                </section>
                
                <div className="petsbox">
                    <div className="cima">
                        <BarraConteudo />
                    </div>
                    <div className="baixo">
                        <AnuncioPet imgPets={CachorroPets} nomePet="Mel" sexo="Fêmea" idade="7 anos" doador="Ong Céu Azul"/>
                        <AnuncioPet imgPets={PapagaioPets} nomePet="Tico" sexo="Macho" idade=" 9 meses" doador="João Silva"/>
                        <AnuncioPet imgPets={GatoPets} nomePet="Bolinha" sexo="Fêmea" idade="1 ano" doador="Ong Girassol" vantagem="não"/>
                        <AnuncioPet imgPets={CachorroPets3} nomePet="Laika" sexo="Fêmea" idade="3 meses" doador="Ong Laço Forte" vantagem="não"/>
                        <AnuncioPet imgPets={CoelhoPets} nomePet="Lily" sexo="Fêmea" idade="1 ano" doador="Ong Céu Azul" vantagem="não"/>
                        <AnuncioPet imgPets={CachorroPets2} nomePet="Bob" sexo="Macho" idade="8 anos" doador="Maria Santos" vantagem="não"/>
                    </div>
                </div>
            </main>
            <Rodape/>
        </>


    );

}

export default Pets;
