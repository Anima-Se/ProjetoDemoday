import React from "react";
import '../footer/footer.css';
import Logo from '../../img/logo.png';
import {BsFacebook} from "react-icons/bs";
import {AiFillInstagram} from "react-icons/ai";
import {AiFillTwitterCircle} from "react-icons/ai";

function Footer(){
    return(
        <section className="footer">
            <div className="esquerdo7">
                <img src={Logo} width="170" className="d-inline-block align-right" alt="Anima-se Logo"/>
                <p>animasepet@gmail.com</p>
            </div>
            <div className="direito7">
                <hr id="feijao"/>
                <div className="paginas">
                    <p>HOME</p>
                    <p>ADOTAR</p>
                    <p>MARKETPLACE</p>
                    <p>APRENDIZAGEM</p>
                </div>
                <div className="redes">
                    <BsFacebook id="face"/>
                    <AiFillInstagram id="insta"/>
                    <AiFillTwitterCircle id="twitter"/>  
                </div>
            </div>
        </section>
    )
}

export default Footer;