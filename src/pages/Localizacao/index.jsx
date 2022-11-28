import React from "react";
import Barra from "../../Components/Navbar/barraHome";
import "./style.css";
import ImgMap from '../../img/passear.png';

function Localizacao() {

    return (
        <>
            <div>
                <Barra />
            </div>
            <section className="localizacao">
                <h1>O que seu precisa perto de você? </h1>
                <div className="divLocalizacao">
                    <div className="mapa">
                        <iframe class="map" src="https://maps.google.com/maps?q=pinheiros&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            allowfullscreen="" loading="lazy"></iframe>
                    </div>

                    <div className="opcaoMapa">
                        <h2>Selecione o que você procura: </h2>

                        <div className="divMap">

                            <div className="imgMapa">
                                <img src={ImgMap} />
                            </div>

                            <div className="opcao">

                                <input type="radio" className="rd" />
                                <p>Pet Shop</p>
                               
                                <input type="radio" className="rd" />
                                <p>ONG</p>

                                <input type="radio" className="rd" />
                                <p>Veterinário</p>

                            </div>

                        </div>

                    </div>
                </div>
            </section>

        </>
    );

}

export default Localizacao;