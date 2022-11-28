
import React from 'react';
import './home.css';
import Cachorro from '../../img/cachorro.png';
import Gato from '../../img/gato.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bola from '../../img/bola.png';
import Cachorro2 from '../../img/cachorro2.png';
import Cachorro3 from '../../img/cachorro3.png';
import Gato2 from '../../img/gato2.png';
import Gato3 from '../../img/gato3.png';
import NavBar from '../../Components/Navbar/barraHome';
import BotaoHome from '../../Components/btnHome';
import Cachorro4 from '..//../img/cachorro4.png'
import Hamster from '..//../img/hamster.png';
import Footer from '../../Components/footer/footer';
import { Link } from 'react-router-dom';
import BtnComecar from '../../Components/btnInicio/btnInicio';

function Home() {
    return (
        <>
            {/* Home parte 1 */}
            <NavBar />
            <section className='home1 container-fluid'>
                <div className='row'>
                    <div className='esquerdo col-md-6 col-sm-6'>
                        <div className='informacoes mx-auto'>
                            <h1 id='slogan'>TODA VIDA<br /> MERECE VIVER<br /><span>DE UMA<br />MANEIRA DIGNA</span></h1>
                            <BtnComecar txtBtn="Começar"/>
                        </div>
                        <div className='divGato'>
                            <img src={Gato} className="img-fluid me-auto" id="gato" alt="Foto de um gato" />
                        </div>
                    </div>
                    <div className='direito col-md-6 col-sm-6'>
                        <img src={Cachorro} className="img-fluid ms-auto" id='cachorro' alt="" />
                    </div>
                </div>
            </section>

            {/* Home parte 2 */}
            <section className='home2'>
                <div className='banner'>
                    <p id='slogan2'>Toda vida merece viver de uma maneira digna</p>

                    <svg xmlns="http://www.w3.org/2000/svg" id='onda' viewBox="0 0 1440 160"><path fill="#D8D1C7" fill-opacity="1" d="M0,32L80,64C160,96,320,160,480,160C640,160,800,96,960,85.3C1120,75,1280,117,1360,138.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
                </div>

                <div className='sobreNos'>
                    <div className='esquerdo2'>
                        <h2 id='subtitulo'>Sobre nós</h2>

                        <p>Nossa plataforma ajudará com as Ongs na divulgação<br /> de seus animais, com o objetivo da adoção crescer<br /> mais e, conseguirmos abrir mais espaços também<br /> para os animais de ruas serem tratados e terem a<br /> chance de passar também por esse processo adotivo.</p>
                    </div>
                    <div className='direito2'>
                        <img src={Bola} className="img-fluid" id="bola" alt="" />
                        <img src={Cachorro2} className="img-fluid" id="cachorro2" alt="" />
                        <img src={Cachorro3} className="img-fluid" id="cachorro3" alt="" />
                        <img src={Gato2} className="img-fluid" id="gato2" alt="" />
                    </div>
                </div>
            </section>

            {/* Home parte 3 */}
            <section className='home3'>

                <div className="linha1">
                    <div className='esquerdo3'>
                        <img src={Gato3} className="img-fluid m-auto" id="gato3" alt="" />
                    </div>
                    <div className='direito3'>
                        <h2>Adoção/Doação</h2>
                        <p>Nós reunimos pessoas e Ong’s que tem interesse em <br /> adotar ou doar pets, facilitando assim essas interações <br /> e diminuindo os casos de abandono dos pets nas ruas.</p>
                        <Link to={"/Perguntas"}>
                            <BotaoHome texto="Pets" cor="roxo" />
                        </Link>
                    </div>
                </div>

                <div className="linha4">
                    <div className='esquerdo6'>
                        <h2>Ferramentas</h2>
                        <p>Também temos ferramentas como  uma calculadora de gastos para controlar o seu orçamento com o pet, e também uma página para localizar locais como veterinários, pet shops e ong’s próximos a você.</p>
                        <div className="linhabtn">
                            <Link to={"/Calculadora"}>
                                <BotaoHome texto="Calculadora" cor="verde" />
                            </Link>

                            <Link to={"/Localizacao"}>
                                <BotaoHome texto="Localize" cor="verde" />
                            </Link>

                        </div>
                    </div>
                    <div className='direito6'>
                        <img src={Hamster} className="img-fluid m-auto" id="hamster" alt="" />
                    </div>
                </div>

                <div className="linha3">
                    <div className='esquerdo5'>
                        <img src={Cachorro4} className="img-fluid m-auto" id="cachorro4" alt="" />
                    </div>
                    <div className='direito5'>
                        <h2>Aprendizagem</h2>
                        <p>Se você quer saber mais de como cuidar de uma forma <br /> melhor do seu animal, você pode adquirir mais <br /> conhecimento também na nossa plataforma.</p>

                        <Link to={"/Aprendizagem"}>
                            <BotaoHome texto="Aprender" cor="roxo" />
                        </Link>

                    </div>
                </div>
                
            </section>

            {/* CardHome */}
            <section className="cardHome">
                <div className='missao'>
                    <h2>NOSSA MISSÃO</h2>
                    <p>Nossa principal missão é ajudar os retirar os animais das ruas e proporcionar um lar para eles, para que eles possam viver bem e não passarem mais dificuldades.</p>
                </div>
            </section>

            {/* Footer */}
            <div>
                <Footer />
            </div>

        </>

    );
}
//   </>
export default Home;