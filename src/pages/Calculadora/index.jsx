import React from "react";
import Barra from "../../Components/Navbar";
import Calc from "../../Components/Calculadora/calculadora";

import "./style.css"

function Calculadora() {

    return (

        <>
            <div>
                <Barra />
            </div>
            <section className="scCalculadora">
                <h1>Calculadora de gastos para manter seu pet</h1>
                <div className="calculadoras">
                    <Calc/>
                    {/* <Calc/> */}
                    {/* <div className="calcCat">
                        <header className="tituloCalc">

                        </header>
                    </div> */}
                </div>
            </section>
        </>

    );

}

export default Calculadora;