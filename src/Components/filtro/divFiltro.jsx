import React from "react";
import "./filtro.css";

import Checkbox from "../inputCheckBox/checkbox";

function DivFiltro({nomeOpcao, op1, op2, op3, op4, op5}) {
    return (


        <div className="titulo">
            <h2>{nomeOpcao}</h2>
            
            <Checkbox opcao={op1} />
            <Checkbox opcao={op2} />
            <Checkbox opcao={op3} />

       

            <p>Ver mais . . .</p>
        </div>

    );
}

export default DivFiltro;