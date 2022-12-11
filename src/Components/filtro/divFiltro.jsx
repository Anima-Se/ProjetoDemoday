import React from "react";
import "./filtro.css";

import Checkbox from "../inputCheckBox/checkbox";

function DivFiltro({ op}) {
    return (


        <div className="titulo">
            <Checkbox opcao={op} />
        </div>

    );
}

export default DivFiltro;