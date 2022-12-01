import React from "react";
import "./style.css";

import InputCalc from "../inputCalc/inputCalc";
import Porte from "../Porte/porte";

function CalcBody() {

    return (
        <>
            <div className="calcBody">

                <div className="topCalc">
                    <h2 className="txtBody">Gastos ao Adotar</h2>
                    <Porte />

                </div>

                <div className="inputCalc">
                    <InputCalc />
                    <InputCalc />
                    <InputCalc />
                    <InputCalc />
                    <InputCalc />
                    <InputCalc />
                   
                </div>

            </div>
        </>
    );

}

export default CalcBody;