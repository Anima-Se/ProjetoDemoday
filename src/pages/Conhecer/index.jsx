import React from "react";
import "./conhecer-style.css";
import laika from "../../img/laika.png";
import NavBar from '../../Components/Navbar';
import BotaoHome from '../../Components/btnHome';
import { Link } from "react-router-dom";
// import Check from "../../img/check.png";
import { AiOutlineCheckCircle } from "react-icons/ai";
import AbrirDiv from '../../Components/openDiv/abrirDiv';
import FecharDiv from '../../Components/openDiv/fecharDiv';
import Map from '../../img/map.png'; 
import User from '../../img/user.png'; 

function Conhecer() {
    return (
        <>
            <div>

                <section className="conhecer">
                    <NavBar />

                    <div className="tela-adotar" id="tela-adotar">
                        <div className="tela-conteudo">
                            <h4>Entre em contato direto com o doador <br /> para mais informações da Laika</h4>
                            <ul className="tela-info">
                                <li> <span> Email: </span> www.onglacoforte@gmail.com</li>
                                <li> <span> Telefone: </span> (11)-93382-3541</li>
                                <li> <span> Endereço: </span> Rua malabares 56, Vila nova, SP</li>
                                <li> <span> Site: </span> <a href="https://www.example.com" target="_blank">Ong Laço Forte</a></li>
                            </ul>
                            {/* <img src={Check} alt="" className="check" /> */}

                            <AiOutlineCheckCircle id="check" onClick={FecharDiv} />



                        </div>
                    </div>

                    <img src={laika} alt="Foto de um cachorro" id="laika" />

                    <div className="conteudo">
                        <h2 className="nome">Laika</h2>
                        <p className="sobre">Laika é uma filhote de apenas 3 meses que chegou na Ong Laço forte com algumas semanas de vida, é uma cachorra dócil e adora brincar principalmente com crianças. A Laika já está com sua primeira vacina tomada e pronta para encontrar um lar.</p>
                        <h3 className="mais-informacoes">Mais informações de Laika</h3>

                        <div className="conhecer-informacoes">

                            <ul className="info1">
                                <li>Raça: Indefinida</li>
                                <li>Idade: 3 meses</li>
                                <li>Sexo: Fêmea</li>
                                <li>Vacinada: Sim</li>
                                <li>Castrada: Não</li>
                            </ul>

                            <ul className="info2">
                                <li>
                                    <img src={Map} alt="" />
                                    Local: São Paulo</li>
                                <li>
                                    <img src={User} alt="" />
                                    Tutor: Ong Laço Forte</li>
                                <li id="conhecer-text">Para entrar em contato, <br /> clique em adotar</li>
                            </ul>


                        </div>

                        <div className="botao-conhecer">

                            <button id="botaoAdotar" onClick={AbrirDiv}> Adotar </button>

                        </div>
                    </div>


                </section>
            </div>
        </>
    );
}

export default Conhecer;