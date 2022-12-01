import React from "react";
import "./anuncio.css";
import Impulso from '../../img/iconeseta.png';
import BtnComecar from '../../Components/btnInicio/btnInicio';
import { Link } from "react-router-dom";


function AnuncioPet({ imgPets, nomePet }) {

    return (
        <>
            <div className="pets">
                <div className="esquerdo8">
                    <img src={imgPets} id="imgpets" />
                </div>
                <div className="direito8">
                    <h2>{nomePet}</h2>
                    <p>aaaa</p>
                    <div id="butao">
                        <Link to={"/Conhecer"}>
                            <BtnComecar txtBtn="Conhecer" />
                        </Link>

                    </div>
                </div>
            </div>
        </>
    );

}

export default AnuncioPet;