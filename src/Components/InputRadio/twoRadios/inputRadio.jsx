import React from 'react';
import './InputRadio.css';


const InputRadio = (({textoLabel,valor1, valor2  }) =>{

    return (
        <div>
    
         <input type="radio"  value={valor1} className="btnRadio" >
         </input>
         <input type="radio"  value={valor2} className="btnRadio" >
         </input>
                
         <label className='labelRadio'>{textoLabel} </label>
         </div>
     )
});

export default InputRadio;
