import React from "react";
import Barra from "../../Components/Navbar";
import '../../pages/Aprendizagem/style.css';
import Bolaaprender from '../../Components/bolaaprender/index.jsx';


function Aprendizagem(){

    return(

        <>
            <Barra/>
            <section className="aprender">
                <div className="lado1">
                    <Bolaaprender/>
                </div>
                <div className="lado2">

                </div>
            </section>
        </>
        

    );

}

export default Aprendizagem;