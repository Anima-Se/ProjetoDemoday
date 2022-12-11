
import React from "react";
import "./anuncio.css";
import BtnComecar from '../../Components/btnInicio/btnInicio';
import { Link } from "react-router-dom";
import { SiStarship } from "react-icons/si";


function AnuncioPet({ imgPets, nomePet, sexo, idade, doador, vantagem }) {
    if (vantagem === "não") {
        return (
            <>
                <div className="pets">
                    <div className="esquerdo8">
                        <img src={imgPets} id="imgpets" />
                    </div>
                    <div className="direito8">
                        <h2>{nomePet}</h2>
                        <ul>
                            <li>{sexo}</li>
                            <li>Idade: {idade}</li>
                            <li>Doador: {doador}</li>

                            <div id="butao">
                                <Link to={"/Conhecer"}>
                                    <BtnComecar txtBtn="Conhecer" />
                                </Link>

                            </div>
                        </ul>
                    </div>
                </div>
            </>
        );
    }
    else {
        return (
            <>
                <div className="pets">
                    <div className="esquerdo8">
                        <img src={imgPets} id="imgpets" />
                    </div>
                    <div className="direito8">
                        <h2>{nomePet}</h2>
                        <ul>
                            <li>{sexo}</li>
                            <li>Idade: {idade}</li>
                            <li>Doador: {doador}</li>

                            <div id="butao">
                                <Link to={"/Conhecer"}>
                                    <BtnComecar txtBtn="Conhecer" />
                                </Link>

                            </div>
                        </ul>
                    </div>
                    <SiStarship id="anuncio-seta"/>
                </div>
            </>
        );
    }

}

export default AnuncioPet;

// const Lista = (({ sexo, idade, doador }) => {

//     <ul>
//         <li>{sexo}</li>
//         <li>Idade: {idade}</li>
//         <li>doador: {doador}</li>
//     </ul>

// })
