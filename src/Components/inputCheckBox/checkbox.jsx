import React from "react";
import "./checkbox.css";

function Checkbox({opcao }) {

    return (
        <>
            <div className="cbInput">
                <input type="checkbox" id="cb"/> 
                <p>{opcao}</p>
            </div>
        </>

    );

}

export default Checkbox;
