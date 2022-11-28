import React from "react";
import "./filtro.css";

import BtnHome from "../btnHome";

function TopoFiltro() {

    return (
        <div className="filtrar">
            <h2>Filtrar</h2>
            <BtnHome texto="Limpar" cor="limpar" />
        </div>
    );

}

export default TopoFiltro;