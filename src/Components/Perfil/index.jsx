import React from "react";
import "./style.css";

const CardPerfil = ({ imagem, animal, titulo, descricao }) => {
  return (
    <div className="PerfilCard">
      {<img src={imagem} alt="" />}
      <div className="CardConteudo">
        <h3>{animal}</h3>
        <div className="card-row">
          <h4>{titulo}</h4>
          <button className="btnPerfil-editar">Editar</button>
        </div>
        <p>{descricao}</p>
      </div>
    </div>
  );
};

export default CardPerfil;
