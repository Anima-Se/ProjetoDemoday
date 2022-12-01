import React from 'react';
import './cadastro_pet.css';
import InserirFoto from '../../img/img_inserir_foto_pet.png';
import InputLabel from '../../Components/Label/inputLabel';

import InputRadio from '../../Components/InputRadio/twoRadios/inputRadio';
import InputThreeRadio from '../../Components/InputRadio/threeRadios/threeRadios';

// import Elipse1 from '../../img/Ellipse_3.png';
import Elipse2 from '../../img/Ellipse_2.png';

function Cadastro_pet() {
    return (
        <div className='pai'>




            <div className='fundo'>
                {/* <img src={Elipse1} className='elipse01' /> */}
                <img src={Elipse2} className='elipse02' />
            </div>

            <div className="container_cadastro_pet">

                <div   className='ImgInserir'>

                    <img src={InserirFoto}   className='ImgInserir' />
                </div>


                <div className='divBoxinputs'>


                    <InputLabel texto='Tipo do pet' tipo='select' fundo='Selecione um tipo' />

                    <InputLabel texto='Possui alguma raça?' tipo='text' fundo='Digite aqui' />

                    <InputLabel texto='Alguma observação? ' tipo='text' fundo='Digite aqui' />

                </div>

                <div>
                    <InputRadio textoLabel="teste" valor1="" valor2=""/>
                    <InputThreeRadio textoLabel="teste" valor1="" valor2="" valor3=""/>
                </div>




                <div className='divBoxinputs'>


                    <InputLabel texto='Nome do pet' tipo='text' fundo='Digite aqui' />

                    <InputLabel texto='Idade do pet' tipo='number' fundo='Quantos anos ele tem?' />

                    <InputLabel texto='Possui documento / pedigree ??' tipo='text' fundo='Coloca ele aqui' />

                    <InputLabel texto='Conta pra gente o motivo da doação' tipo='text' fundo='Pode escrever por aqui' />

                </div>


            </div>




        </div>
    )
}

export default Cadastro_pet;
