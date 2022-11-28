
import React from "react";
import "./anuncio.css";
import BtnComecar from '../../Components/btnInicio/btnInicio';
import { Link } from "react-router-dom";


function AnuncioPet({ imgPets, nomePet, sexo, idade, doador }) {

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
                        <li>doador: {doador}</li>
                    </ul>
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

// const Lista = (({ sexo, idade, doador }) => {

//     <ul>
//         <li>{sexo}</li>
//         <li>Idade: {idade}</li>
//         <li>doador: {doador}</li>
//     </ul>

// })
