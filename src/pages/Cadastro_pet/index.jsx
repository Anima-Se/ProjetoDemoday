import React, { useState } from "react";
import "../Cadastro_pet/cadastro_pet.css";
import InserirFoto from "../../img/img_inserir_foto_pet.png";
import InputLabel from "../../Components/Label/inputLabel";
import InputRadio from "../../Components/InputRadio/twoRadios/inputRadio";
import InputThreeRadio from "../../Components/InputRadio/threeRadios/threeRadios";
import SetaVoltar from "../../img/setaVoltar.png";
import { json, Link } from "react-router-dom";
import Tabela from "./tabela";
import { useEffect } from "react";
import { CAccordionCollapse } from "@coreui/react";
import Option from "../../Components/Label/optionLabel";

function CadastroPet() {
  // Objeto Pet
  const pet = {
    id_animal: 0,
    //foto_animal
    tipo_animal: "",
    raca_animal: "",
    obs_animal: "",
    genero_animal: "",
    porte_animal: "",
    necessidades_especiais: "",
    nome_animal: "",
    idade_animal: "",
    documento_animal: "",
    motivo_doacao: "",
    castracao: "",
    vacina: "",
    cria: "",
  };

  // // UseState
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const botao = btnCadastrar;
  const [pets, setPet] = useState([]);
  const [objPet, setObjPet] = useState(pet);

  // UseEffect
  useEffect(() => {
    fetch("http://localhost:8080/listarPet")
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => setPet(retorno_convertido));
  }, []);

  // Obtendo os dados do formulário
  const aoDigitar = (e) => {
    setObjPet({ ...objPet, [e.target.name]: e.target.value });
    console.log(e.target);
  };

  // Selecionar Select
  // const aoSelecionar = (s) => {
  //   setObjPet({})
  // };

  // Cadastrar Pet
  const cadastrarPet = () => {
    // objPet.cria = document.querySelector
    fetch("http://localhost:8080/cadastrarPet", {
      method: "post",
      body: JSON.stringify(objPet),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => {
        if (retorno_convertido.mensagem !== undefined) {
          alert(retorno_convertido.mensagem);
        } else {
          setPet([...pets, retorno_convertido]);
          alert("Pet cadastrado com sucesso!");
          limparFormulario();
        }
      });
  };

  // Alterar Pet
  const alterarPet = () => {
    fetch("http://localhost:8080/alterarPet", {
      method: "put",
      body: JSON.stringify(objPet),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => {
        if (retorno_convertido.mensagem !== undefined) {
          alert(retorno_convertido.mensagem);
        } else {
          alert("Pet alterado com sucesso!");

          //copia do vetor de pets
          let vetorTemp = [...pets];

          // indice
          let indice = vetorTemp.findIndex((p) => {
            return p.id_animal === objPet.id_animal;
          });

          // alterar pet do vetorTemp
          vetorTemp[indice] = objPet;

          // atualizar o vetor de pets
          setPet(vetorTemp);

          limparFormulario();
        }
      });
  };

  // Remover pet
  const removerPet = () => {
    fetch("http://localhost:8080/removerPet/" + objPet.id_animal, {
      method: "delete",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => {
        // mensagem
        alert("Pet removido com sucesso." + retorno_convertido.mensagem);

        //copia do vetor de pets
        let vetorTemp = [...pets];

        // indice
        let indice = vetorTemp.findIndex((p) => {
          return p.id_animal === objPet.id_animal;
        });

        // remover pet do vetorTemp
        vetorTemp.splice(indice, 1);

        // atualizar o vetor de pets
        setPet(vetorTemp);

        limparFormulario();
      });
  };

  //Limpar fomulario
  const limparFormulario = () => {
    setObjPet(pet);
    setBtnCadastrar(true);

    document.location.reload(true);
  };

  // Selecionar pet
  const selecionarPet = (indice) => {
    setObjPet(pets[indice]);
    setBtnCadastrar(false);
  };

  return (
    <>
      <section className="cadastroPet">
        <div className="divSeta">
          <Link to={"/Perguntas"}>
            <img src={SetaVoltar} alt="" />
          </Link>
        </div>
        <section className="conteudoPet">
          <div className="parteCima">
            <img src={InserirFoto} />
          </div>

          <div className="parteBaixo">
            <div className="esquerdoPets">
              <label>Tipo do pet</label>
              <select name="tipo_animal" id="selectPet" onChange={aoDigitar}>
                <Option value="" text="Selecionar" />
                <Option value="Cachorro" text="Cachorro" />
                <Option value="Gato" text="Gato" />
                <Option value="Coelho" text="Coelho" />
                <Option value="Ave" text="Ave" />
                <Option value="Tartaruga" text="Tartaruga" />
                <Option value="Roedor" text="Roedor" />
                <Option value="Aquático" text="Aquático" />
                <Option value="Réptil" text="Réptil" />
              </select>
              <InputLabel
                texto="Possui alguma raça?"
                change={aoDigitar}
                valor={objPet.raca_animal}
                name="raca_animal"
                tipo="text"
                fundo="Digite aqui"
              />
              <InputLabel
                texto="Alguma observação? "
                change={aoDigitar}
                valor={objPet.obs_animal}
                name="obs_animal"
                tipo="text"
                fundo="Digite aqui"
              />
              <InputRadio
                textoLabel="Gênero"
                valor1="Macho"
                valor2="Fêmea"
                change={aoDigitar}
                nameRadio="genero_animal"
              />
              <InputThreeRadio
                textoLabel="Porte do pet"
                valor1="Pequeno"
                valor2="Médio"
                valor3="Grande"
                change={aoDigitar}
                nameRadio="porte_animal"
              />
              <InputRadio
                textoLabel="O pet precisa de cuidados especiais?"
                valor1="Sim"
                valor2="Não"
                change={aoDigitar}
                nameRadio="necessidades_especiais"
              />
            </div>
            <div className="direitoPets">
              <InputLabel
                texto="Nome do pet"
                change={aoDigitar}
                valor={objPet.nome_animal}
                name="nome_animal"
                tipo="text"
                fundo="Digite aqui"
              />
              <InputLabel
                texto="Idade do pet"
                change={aoDigitar}
                valor={objPet.idade_animal}
                name="idade_animal"
                tipo="text"
                fundo="Digite aqui"
              />
              <InputLabel
                texto="Possui documento / pedigree? "
                change={aoDigitar}
                valor={objPet.documento_animal}
                name="documento_animal"
                tipo="text"
                fundo="Digite aqui"
              />
              <InputLabel
                texto="Motivo da doação "
                change={aoDigitar}
                valor={objPet.motivo_doacao}
                name="motivo_doacao"
                tipo="text"
                fundo="Digite aqui"
              />
              <InputThreeRadio
                textoLabel="É castrado?"
                valor1="Sim"
                valor2="Não"
                valor3="Não sei"
                change={aoDigitar}
                nameRadio="castracao"
              />
              <InputThreeRadio
                textoLabel="Está vacinado?"
                valor1="Sim"
                valor2="Não"
                valor3="Não sei"
                change={aoDigitar}
                nameRadio="vacina"
              />
              <InputThreeRadio
                textoLabel="Já teve cria?"
                valor1="Sim"
                valor2="Não"
                valor3="Não sei"
                change={aoDigitar}
                nameRadio="cria"
              />
            </div>
          </div>
          <div className="divBotao">
            {botao ? (
              <button onClick={cadastrarPet}>Cadastrar</button>
            ) : (
              <div>
                <button onClick={alterarPet}>Aterar</button>
                <button onClick={removerPet}>Remover</button>
                <button onClick={limparFormulario}>Cancelar</button>
              </div>
            )}
          </div>
        </section>
      </section>

    </>
  );
}

export default CadastroPet;
