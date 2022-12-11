import React from "react";
import Barra from "../../Components/Navbar/barraHome";
import "./style.css";
import ImgMap from '../../img/passear.png';
import Rodape from "../../Components/footer/footer";

function Localizacao() {

    return (
        <>
            <div>
                <Barra />
            </div>
            <section className="localizacao">
                <h1>O que seu animal precisa? </h1>
                <div className="divLocalizacao">
                    <div className="mapa">
                        <iframe class="map" src="https://maps.google.com/maps?q=pinheiros&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            allowfullscreen="" loading="lazy"></iframe>
                    </div>

                    <div className="opcaoMapa">
                        <h2>Selecione o que você procura </h2>

                        <div className="divMap">

                            <div className="imgMapa">
                                <img src={ImgMap} />
                            </div>

                            <div className="opcao">

                                <input type="radio"  name="inpRadio" />
                                <label className="lblRadio">Pet Shop</label>
                               
                                <input type="radio"  name="inpRadio"/>
                                <label className="lblRadio" id="ong-p">ONG</label>

                                <input type="radio" className="rd" name="inpRadio"/>
                                <label className="lblVet"> Veterinário</label>

                            </div>

                        </div>

                    </div>
                </div>
            </section>
            <Rodape/>
        </>
    );

}

export default Localizacao;