import React from "react";
import "./filtro.css";

function TipoFiltro({titulo, resultado}) {

    return (

        <div className="nomeFiltro">
            <h2>{titulo}</h2>
            <input type="range" min="1" max="100" className="inpEstilo"/>
            <h2 id="preco">{resultado}</h2>

        </div>

    );

}

export default TipoFiltro;