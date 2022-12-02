import React from 'react';
import './style.css';

const Calculadora = (({ retorno, tipo, valor}) => {
  if(retorno === "inpRadio"){
  return(
    <>
          <input type={tipo} name="porte" id='inpRadio' value={valor}/>
    </>
  )}
  if(retorno === "inpNumber"){
  return(
    <>
          <input type={tipo} id='inpNumber' min="1"/>
    </>
  )}
})

export default Calculadora;