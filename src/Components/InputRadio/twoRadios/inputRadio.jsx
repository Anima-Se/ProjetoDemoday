import React from "react";
import "./InputRadio.css";

const InputRadio = ({ textoLabel, valor1, valor2, nameRadio, change }) => {
  return (
    <div>
      <label className="labelRadio TextoLabel">{textoLabel} </label>

      <div className="radios">
        <div className="radio">
        <label className="opcaoRadio ">{valor1}</label>
          <input
            type="radio"
            value={valor1}
            onChange={change}
            name={nameRadio}
            className="btnRadio"
          ></input>
          
        </div>

        <div className="radio">
        <label className="opcaoRadio">{valor2}</label>

          <input
            type="radio"
            value={valor2}
            onChange={change}
            name={nameRadio}
            className="btnRadio"
          ></input>
        </div>
      </div>
    </div>
    
  );
};



export default InputRadio;
