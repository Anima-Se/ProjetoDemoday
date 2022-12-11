import React from "react";
import '../footer/footer.css';
import Logo from '../../img/logo.png';
import Amimais from '../../img/AmiMais.png';
import Conest from '../../img/Conest.png';
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { SiLinktree } from "react-icons/si";

function Footer() {
    return (
        <section className="footer">
            <div id="conteudo-footer">

                <div className="esquerdo7">
                    <img src={Logo} width="170" className="d-inline-block align-right" alt="Anima-se Logo" />
                    <p>animasepet@gmail.com</p>
                </div>
                <div className="direito7">
                    <hr />
                    <div className="paginas">
                        <div className="imagens-parceria">
                            <p>Parcerias</p>
                            <img src={Amimais} alt="parceria com AmiMais" id="imgParcerias1" />
                            <img src={Conest} alt="parceria com Conest" id="imgParcerias2" />
                        </div>

                    </div>
                    <div className="redes">
                        <div className="aotodo">
                            <div className="git">
                                <AiFillGithub id="git" />
                                <a href="https://github.com/Anima-Se" target="_blank">GitHub</a>
                            </div>
                            <div className="insta">

                                <AiFillInstagram id="insta" />
                                <a href="https://www.instagram.com/animasepet/?next=%2F" target="_blank">Instagram</a>
                            </div>
                            <div className="linktree">

                                <SiLinktree id="linktree" />
                                <a href="https://linktr.ee/Anima.se" target="_blank">Linktree</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <center><p>&copy; Copyright 2022. Todos os direitos reservados à Anima-Se</p></center>
        </section>
    )
}

export default Footer;

