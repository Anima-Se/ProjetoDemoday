import { ReactDOM } from "react";
import React from "react";
import './impulsionar-style.css';

const Impulsionar = ({titulo, descricao, aviso, btnTexto, icon}) => {
  return (
    <div className="impulsoPerfil">
      <h2>{titulo}</h2>
      <p className="descricaoImpulsoPerfil">{descricao}</p>
      <p className="avisoPerfil">{aviso}</p>
      <button className="impulsionarPerfil">
        {btnTexto}
        {icon}
      </button>
    </div>
  );
};

export default Impulsionar
