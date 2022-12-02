import React from "react";
import Barra from "../../Components/Navbar";
import Footer from "../../Components/footer/footer.jsx";
import DogIcon from "../../img/CachorroCalc.png";
import CatIcon from "../../img/GatoCalc.png";
import Radio from "../../Components/Calculadora/calculadora";
import Number from "../../Components/Calculadora/calculadora";

import "./style.css";

function Calculadora() {

    return (

        <>
            <div>
                <Barra />
            </div>
            <section id="Calculadora">
                <h4 id="title">Calcular gastos para manter seu Pet</h4>

                <div className="GatoCachorro">

                    <div className="ctCachorro">
                        <div className="tituloGC">
                            <img src={DogIcon} alt="ícone do cachorro" width="50px"/>
                            <h5>Cachorro</h5>
                        </div>
                        <div className="gAdotar">
                            <h4>Gastos ao Adotar</h4>
                            <div className="top">
                                <div className="Porte">
                                    <div id="lblPorte">
                                        <h6>Porte:  </h6>
                                        <Radio retorno="inpRadio" tipo="radio" valor="Pequeno" />
                                        <label>Pequeno</label>
                                        <Radio retorno="inpRadio" tipo="radio" valor="Medio" />
                                        <label>Médio</label>
                                        <Radio retorno="inpRadio" tipo="radio" valor="Grande" />
                                        <label>Grande</label>
                                    </div>
                                </div>
                            </div>
                            <div className="conteudoAdotar">
                                <div className="labels">
                                    <p>Castração</p>
                                    <Number tipo="number" retorno="inpNumber" className="inpNumber" />
                                </div>
                                <div className="labels">
                                    <p>Cama/Casa</p>
                                    <Number tipo="number" retorno="inpNumber" className="inpNumber" />
                                </div>
                                <div className="labels">
                                    <p>Veterinário</p>
                                    <Number tipo="number" retorno="inpNumber" className="inpNumber" />
                                </div>
                                <div className="labels">
                                    <p>Caixa Transporte</p>
                                    <Number tipo="number" retorno="inpNumber" className="inpNumber" />
                                </div>
                                <div className="labels">
                                    <p>Área Sanitária</p>
                                    <Number tipo="number" retorno="inpNumber" className="inpNumber" />
                                </div>
                                <div className="labels">
                                    <p>Acessórios</p>
                                    <Number tipo="number" retorno="inpNumber" className="inpNumber" />
                                </div>
                                <div className="labels">
                                    <p>Outros</p>
                                    <Number tipo="number" retorno="inpNumber" className="inpNumber" />
                                </div>
                            </div>
                        </div>
                        <div className="gMensal">
                            <h4>Gastos Mensal</h4>
                            <div className="conteudoAdotar">
                                <div className="labels2">
                                    <p>Ração</p>
                                    <Number tipo="number" retorno="inpNumber" className="inpNumber" />
                                </div>
                                <div className="labels2">
                                    <p>Banho/Pet Shop</p>
                                    <Number tipo="number" retorno="inpNumber" className="inpNumber" />
                                </div>
                                <div className="labels2">
                                    <p>Veterinário</p>
                                    <Number tipo="number" retorno="inpNumber" className="inpNumber" />
                                </div>
                                <div className="labels2">
                                    <p>Medicamento/Vacina</p>
                                    <Number tipo="number" retorno="inpNumber" className="inpNumber" />
                                </div>
                                <div className="labels2">
                                    <p>Outros</p>
                                    <Number tipo="number" retorno="inpNumber" className="inpNumber" />
                                </div>
                            </div>
                        </div>
                        <div className="rodape">
                            <h6>Gasto Inicial: R$00,00</h6>
                            <h6>Gasto Mensal: R$00,00</h6>
                            <h6>Gasto Anual: R$00,00</h6>
                        </div>

                    </div>
                    <div className="ctGato">
                        <div className="tituloGC">
                            <img src={CatIcon} alt="ícone do gato" width="50px" />
                            <h5>Gato</h5>
                        </div>
                        <div className="gAdotar">
                            <h4>Gastos ao Adotar</h4>
                            <div className="top">
                                <div className="Porte">
                                    <div id="lblPorte">
                                        <h6>Porte:  </h6>
                                        <Radio retorno="inpRadio" tipo="radio" valor="Pequeno" />
                                        <label>Pequeno</label>
                                        <Radio retorno="inpRadio" tipo="radio" valor="Medio" />
                                        <label>Médio</label>
                                        <Radio retorno="inpRadio" tipo="radio" valor="Grande" />
                                        <label>Grande</label>
                                    </div>
                                </div>
                            </div>
                            <div className="conteudoAdotar">
                                <div className="labels">
                                    <p>Castração</p>
                                    <Number tipo="number" retorno="inpNumber" className="inpNumber" />
                                </div>
                                <div className="labels">
                                    <p>Cama/Casa</p>
                                    <Number tipo="number" retorno="inpNumber" className="inpNumber" />
                                </div>
                                <div className="labels">
                                    <p>Veterinário</p>
                                    <Number tipo="number" retorno="inpNumber" className="inpNumber" />
                                </div>
                                <div className="labels">
                                    <p>Caixa Transporte</p>
                                    <Number tipo="number" retorno="inpNumber" className="inpNumber" />
                                </div>
                                <div className="labels">
                                    <p>Caixa Sanitária</p>
                                    <Number tipo="number" retorno="inpNumber" className="inpNumber" />
                                </div>
                                <div className="labels">
                                    <p>Acessórios</p>
                                    <Number tipo="number" retorno="inpNumber" className="inpNumber" />
                                </div>
                                <div className="labels">
                                    <p>Outros</p>
                                    <Number tipo="number" retorno="inpNumber" className="inpNumber" />
                                </div>
                            </div>
                        </div>
                        <div className="gMensal">
                            <h4>Gastos Mensal</h4>
                            <div className="conteudoAdotar">
                                <div className="labels2">
                                    <p>Ração</p>
                                    <Number tipo="number" retorno="inpNumber" className="inpNumber" />
                                </div>
                                <div className="labels2">
                                    <p>Banho/Pet Shop</p>
                                    <Number tipo="number" retorno="inpNumber" className="inpNumber" />
                                </div>
                                <div className="labels2">
                                    <p>Veterinário</p>
                                    <Number tipo="number" retorno="inpNumber" className="inpNumber" />
                                </div>
                                <div className="labels2">
                                    <p>Medicamento/Vacina</p>
                                    <Number tipo="number" retorno="inpNumber" className="inpNumber" />
                                </div>
                                <div className="labels2">
                                    <p>Outros</p>
                                    <Number tipo="number" retorno="inpNumber" className="inpNumber" />
                                </div>
                            </div>
                        </div>
                        <div className="rodape">
                            <h6>Gasto Inicial: R$00,00</h6>
                            <h6>Gasto Mensal: R$00,00</h6>
                            <h6>Gasto Anual: R$00,00</h6>
                        </div>

                    </div>
                </div>
            </section>
            <div>
                <Footer />
            </div>
        </>

    );

}

export default Calculadora;