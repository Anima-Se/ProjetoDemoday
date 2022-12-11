import React, { useState } from "react";
import fakeApi from "./api";
import { Link } from "react-router-dom";
import Logo from '../../img/logo.png';
import BtnSlide from '../../Components/btn-slide/btn-slide';
import imgBtn from "../../img/seta.png";
import './cadastro.css';

const steps = [
    {
        id: "LOGIN",
        title: "Dados para logar"
    },
    {
        id: "PESSOAL",
        title: "Dados Pessoais"
    },
    {
        id: "ENDERECO",
        title: "Dados de Endereço"
    }
];

export default function Cadastro() {

    const [currentStep, setCurrentStep] = useState(0);
    const [loading, setLoading] = useState(false);
    const [valor , setValor] = useState([]);
    const [formValues, setFormValues] = useState({

        nome: "",
        email: "",
        senha: "",
        telefone: "",
        cpf: "",
        data_nascimento: "",
        cep: "",
        endereco: "",
        num_logradouro: "",
        logradouro: "",
        complemento: ""

    });

      
      

    const cadastrar = () => {

        fetch("http://localhost:8080/cadastraruser", {

            method: "post",
            body: JSON.stringify(formValues),
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

                    setFormValues([...valor, retorno_convertido]);
                    alert("Cadatro realizado com sucesso ");
                    window.location.href="/Login";

                }
            });
    }


    function handleNext() {
        setCurrentStep((prevState) => prevState + 1);
    }

    function handleInputChange(event) {
        const { name, value } = event.target;

        setFormValues((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();

        console.log("Form sent...", formValues);

        setLoading(true);

        // simulate api
        await fakeApi(() => setLoading(false), 2000);
    }

    return (
        <div className='background'>
            <Link to={'/'}>
                <img
                    src={Logo}
                    width="180"
                    className="d-inline-block align-right"
                    alt="Anima-se Logo"
                />
            </Link>
            <div className='div_pai'>

                <form className="container" onSubmit={handleSubmit}>
                    <div className='login_cadastro'>
                        <BtnSlide page="cadastro" />
                    </div>
                    <br />
                    <center>
                        <p className="step-guide">
                            {currentStep + 1} de {steps.length}
                        </p>

                    </center>
                    <div className="fields-container">


                        {steps[currentStep].id === "LOGIN" && (
                            <div className="fields">
                                <div className="field">
                                    <input
                                        type="text"
                                        placeholder="Seu Email"
                                        name="email"
                                        onChange={handleInputChange}
                                        value={formValues.email}
                                        required
                                    />
                                </div>
                                <div className="field">
                                    <input
                                        type="password"
                                        placeholder="Sua Senha"
                                        name="senha"
                                        onChange={handleInputChange}
                                        value={formValues.senha}

                                    />
                                </div>
                                <div className="field">
                                    <input
                                        type="password"
                                        placeholder="Confirmar Senha"
                                        name="confSenha"
                                        onChange={handleInputChange}
                                    // value={formValues.confSenha}

                                    />
                                </div>


                            </div>
                        )}

                        {steps[currentStep].id === "PESSOAL" && (
                            <div className="fields">
                                <div className="field">
                                    <input
                                        type="text"
                                        placeholder="Nome Completo"
                                        name="nome"
                                        onChange={handleInputChange}
                                        value={formValues.nome}
                                        required
                                    />
                                </div>
                                <div className="field">
                                    <input
                                        type="text"
                                        placeholder="Telefone"
                                        name="telefone"
                                        onChange={handleInputChange}
                                        value={formValues.telefone}
                                        required
                                    />
                                </div>
                                <div className="field">
                                    <input
                                        type="text"
                                        placeholder="CPF"
                                        name="cpf"
                                        onChange={handleInputChange}
                                        value={formValues.cpf}
                                        required
                                    />
                                </div>
                                <div className="field">
                                    <input
                                        type="date"
                                        name="data_nascimento"
                                        onChange={handleInputChange}
                                        value={formValues.data_nascimento}
                                        required
                                    />
                                </div>
                            </div>
                        )}

                        {steps[currentStep].id === "ENDERECO" && (
                            <div className="fields">
                                <div className="field">
                                    <input
                                        type="number"
                                        placeholder="CEP"
                                        name="cep"
                                        onChange={handleInputChange}
                                        value={formValues.cep}
                                        required
                                    />
                                </div>
                                <div className="field">
                                    <input
                                        type="text"
                                        placeholder="Endereço"
                                        name="logradouro"
                                        onChange={handleInputChange}
                                        value={formValues.logradouro}
                                        required
                                    />
                                </div>
                                <div className="field">
                                    <input
                                        type="text"
                                        placeholder="Número"
                                        name="num_logradouro"
                                        onChange={handleInputChange}
                                        value={formValues.num_logradouro}
                                        required
                                    />
                                </div>
                                <div className="field">
                                    <input
                                        type="text"
                                        placeholder="Complemento"
                                        name="complemento"
                                        onChange={handleInputChange}
                                        value={formValues.complemento}
                                        required
                                    />
                                </div>
                                <div className='termo'>
                                    <input
                                        type="checkbox"
                                        name="termo"
                                        onChange={handleInputChange}
                                        required
                                        id="checktermo"
                                    />
                                    <a href="https://drive.google.com/file/d/1RcRpjUfn7Elwfr96cuZlLnIbazmbc90P/view?usp=sharing" id='termo'>
                                        Termo de responsabilidade
                                    </a>
                                </div>
                            </div>
                        )}

                        {currentStep < steps.length - 1 && (
                            <button className="box_btn" type="button" onClick={handleNext}>
                                <img className='imagemseta' src={imgBtn} alt="botao proximo" />
                            </button>
                        )}

                        {currentStep === steps.length - 1 && (
                            
                            <button className="box_btn" type="submit" onClick={cadastrar}>
                                <img className='imagemseta' src={imgBtn} alt="botao proximo" />
                            </button>

                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}
