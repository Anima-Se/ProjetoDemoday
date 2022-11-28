import React from "react";
import "./filtro.css";


import TopoFiltro from "./topoFiltro";
import TipoFiltro from "./tipoFiltro";
import DivFiltro from "./divFiltro";

function Filtro() {

    return (
        <section className="filtro">
            <TopoFiltro/>
            <TipoFiltro titulo="Preço" resultado="Máx. R$50,00"/>
            <DivFiltro nomeOpcao="Marcas" op1="Pedgree" op2="Whiskas" op3="Golden" op4="Magnus" op5="Premier"/>
            <DivFiltro nomeOpcao="Porte"  op1="Pequeno" op2="Médio" op3="Grande" op4="Outros"/>
            <DivFiltro nomeOpcao="Idade" op1="Filhote" op2="Adulto" op3="Sênior"/>
            <DivFiltro nomeOpcao="Animal" op1="Cachorro" op2="Gato" op3="Aves" op4="Roedores" op5="Outros"/>
        
        </section>

    );

}

export default Filtro;