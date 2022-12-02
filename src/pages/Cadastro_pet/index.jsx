
import React from 'react';
import '../Cadastro_pet/cadastro_pet.css';
import InserirFoto from '../../img/img_inserir_foto_pet.png';
import InputLabel from '../../Components/Label/inputLabel';
import InputRadio from '../../Components/InputRadio/twoRadios/inputRadio';
import InputThreeRadio from '../../Components/InputRadio/threeRadios/threeRadios';
import SetaVoltar from '../../img/setaVoltar.png';
import { Link } from "react-router-dom";

function CadastroPet() {
    return (

        <section className='cadastroPet'>
            <div className='divSeta'>
                <Link to={"/Perguntas"}>
                    <img src={SetaVoltar} alt="" />
                </Link>
            </div>
            <section className='conteudoPet'>
                <div className='parteCima'>
                    <img src={InserirFoto} />
                </div>

                <div className='parteBaixo'>
                    <div className='esquerdoPets'>

                        <InputLabel texto='Tipo do pet' tipo='select' fundo='Selecione um tipo' />
                        <InputLabel texto='Possui alguma raça?' tipo='text' fundo='Digite aqui' />
                        <InputLabel texto='Alguma observação? ' tipo='text' fundo='Digite aqui' />
                        <InputRadio textoLabel="Gênero" valor1="Macho" valor2="Fêmea" nameRadio="generoRadio" />
                        <InputThreeRadio textoLabel="Porte do pet" valor1="Pequeno" valor2="Médio" valor3="Grande" nameRadio="porte" />
                        <InputRadio textoLabel="O pet precisa de cuidados especiais?" valor1="Sim" valor2="Não" nameRadio="cuidadosEspeciais" />

                    </div>
                    <div className='direitoPets'>

                        <InputLabel texto='Nome do pet' tipo='select' fundo='Digite aqui' />
                        <InputLabel texto='Idade do pet' tipo='text' fundo='Digite aqui' />
                        <InputLabel texto='Possuí documento / pedigree? ' tipo='text' fundo='Digite aqui' />
                        <InputLabel texto='Motivo da doação ' tipo='text' fundo='Digite aqui' />
                        <InputThreeRadio textoLabel="É castrado?" valor1="Sim" valor2="Não" valor3="Não sei" nameRadio="castrado" />
                        <InputThreeRadio textoLabel="Está vacinado?" valor1="Sim" valor2="Não" valor3="Não sei" nameRadio="vacinado" />
                        <InputThreeRadio textoLabel="Já teve cria?" valor1="Sim" valor2="Não" valor3="Não sei" nameRadio="vacinado" />

                    </div>
                </div>

                <div className='divBotao'>
                    <button>Enviar</button>
                </div>
            </section>
        </section>

    );
}

export default CadastroPet

