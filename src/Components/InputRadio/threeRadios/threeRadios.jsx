import React from 'react';
import './threeRadios.css';


const InputThreeRadio = (({ textoLabel, valor1, valor2,valor3 }) => {

    return (
        <div>
            <label className='labelRadio'>{textoLabel} </label>

            <input type="radio" value={valor1} className="btnRadio" >
            </input>
            <input type="radio" value={valor2} className="btnRadio" >
            </input>
            <input type="radio" value={valor3} className="btnRadio" >
            </input>


        </div>
    )
});

export default InputThreeRadio;
