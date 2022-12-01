import React from "react";
import "./style.css";

import Gato from "../../img/GatoCalc.png";
import InputCalc from "./inputCalc/inputCalc";
import CalcBody from "./calcBody/calcBody";

function Calc() {
    return (
        <>

            <div className="calc">
                <header className="tituloCalc">
                    <img src={Gato} alt="" />
                    <h2>Cachorro</h2>
                </header>
                <CalcBody/>
                
            </div>
        </>
    );
}

export default Calc;