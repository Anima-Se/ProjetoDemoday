import React from "react";
import './card.css';
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText} from '@coreui/react';
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

import { BsStar } from 'react-icons/bs'
import { BsStarFill } from 'react-icons/bs'
import { BsStarHalf } from 'react-icons/bs';





function Card({ titulo, texto, preco, marca, peso, img }) {
    return (
        <>

            <div id='divcard'>
                <CCard id="cardBody" >
                    <CCardImage src={img} id="imgProd"/>
                    <CCardBody>
                        <p id="marcaProduto">{marca}</p>
                        <CCardTitle>
                            <div>
                                <p id="tituloProduto">{titulo}
                                    <div className="stars">
                                        <BsStarFill className="bsStar" />
                                        <BsStarFill className="bsStar" />
                                        <BsStarFill className="bsStar" />
                                        <BsStarHalf className="bsStar" />
                                        <BsStar className="bsStar" />
                                    </div>
                                </p>
                            </div>

                        </CCardTitle>

                        <CCardText>
                            {texto}
                        </CCardText>
                        <CCardText>
                            <h6 id="precoCard">A partir de: </h6>
                            <div className="info">
                                <h6 id="precoCard">R${preco}</h6>
                                <button id="btnpeso">{peso} KG</button>
                            </div>

                        </CCardText>
                        <Link to={"/Produto"}>
                            <Button type="button" id="btncard">Ver mais</Button>
                        </Link>

                    </CCardBody>
                </CCard>
            </div>



        </>
    );
}


export default Card;