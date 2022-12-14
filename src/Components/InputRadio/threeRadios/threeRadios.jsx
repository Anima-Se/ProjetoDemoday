import React from "react";
import "./threeRadios.css";

const InputThreeRadio = ({ textoLabel, valor1, valor2, valor3, nameRadio, change }) => {
  return (
    <div>
      <label className="labelRadio TextoLabel">{textoLabel} </label>

      <div className="radiosThree">
        <div className="radio">
        <label className="opcaoRadio ">{valor1}</label>
          <input
            type="radio"
            onChange={change}
            value={valor1}
            name={nameRadio}
            className="btnRadio"
          ></input>
        </div>

        <div className="radio">
        <label className="opcaoRadio ">{valor2}</label>

          <input
            type="radio"
            onChange={change}
            value={valor2}
            name={nameRadio}
            className="btnRadio"
          ></input>
        </div>

        <div className="radio">
        <label className="opcaoRadio ">{valor3}</label>

          <input
            type="radio"
            value={valor3}
            onChange={change}
            name={nameRadio}
            className="btnRadio"
          ></input>
        </div>

      </div>
    </div>

    


  );

  
};

export default InputThreeRadio;