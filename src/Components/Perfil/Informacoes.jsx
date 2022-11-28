import React from "react";
import './style.css';


const InformacoesPerfil = ({background, foto, nome, icon, email, publicacoes}) => {
    return(
        <header className="cabecalho">
          <div className="imgBack">
            <img src={background} alt="" />
          </div>

          <div className="foto-perfil">
            <img src={foto} alt="" />
          </div>
          <div className="conteudoPerfil">
          <div className="rowPerfil">
            <h1>{nome}</h1>
            <button className="editarPerfil">Editar Perfil {icon}</button>
          </div>
          <p className="email">{email}</p>
          <p className="numeroPulicacoes">{publicacoes} Publicações</p>
          </div>
        </header>
    );
}

export default InformacoesPerfil;