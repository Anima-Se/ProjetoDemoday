import React from "react";
import "./style.css";

import Checkbox from "../../inputCheckBox/checkbox";

function Porte() {

    return (

        <>
            <div className="porteBody">

                <p id="tituloCb">Porte:</p>
                
                <div className="check">
                    <p className="txtCb">Pequeno</p>
                    <input type="checkbox" id="cb" />
                    <p className="txtCb">Médio</p>
                    <input type="checkbox" id="cb" />
                    <p className="txtCb">Grande</p>
                    <input type="checkbox" id="cb" />
                </div>

            </div>
        </>

    );

}

export default Porte;