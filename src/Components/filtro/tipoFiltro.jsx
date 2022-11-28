import React from "react";
import "./filtro.css";

function TipoFiltro({titulo, resultado}) {

    return (

        <div className="nomeFiltro">
            <h2>{titulo}</h2>
            <p>barra</p>
            <h2 id="preco">{resultado}</h2>

        </div>

    );

}

export default TipoFiltro;