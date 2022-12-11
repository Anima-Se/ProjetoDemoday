
import './stylo.css';

import BtnSlide from '../../Components/btn-slide/btn-slide';
import InputCad from '../../Components/Input';
import { BsGoogle } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import Logo from '../../img/logo.png';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';

import axios from 'axios';

function Login() {

    let navigate = useNavigate();
    const objLogin = {

        email: '',
        senha : ''

    }

    const [data, setData] = useState(objLogin);

      
    const aoDigitar = (e) => {

        setData(prev => ({...prev, [e.target.name]: e.target.value}));
        console.log(data);

    };


    const logar = () => {
        if(data.email === "animase@gmail.com" && data.senha === 1234){
            console.log(data);
            alert('Usuario logado');
            window.location.href="/perfil";
        }
    }


    
    // const submitForm = (e) => {
    

    //     e.preventDefault();

    //     const sendData = {

    //         email: data.email,
    //         senha: data.senha

    //     }

    //     console.log(sendData);
        
        
    //     axios.post('localhost/ProjetoDemoday/src/pages/Login/login.php', sendData)
    //     .then((result)=>{


    //         if (result.data.Status === '200') { 

    //             window.localStorage.setItem('email', result.data.email);
    //             window.localStorage.setItem('senha', (result.data.senha+ ' ' +result.data.senha ));  
    //             navigate(`/Perfil`);

    //         }

    //     else  {

    //        //props.history.push('/Dashboard')  
    //        //props.history.push('/Dashboard') Redirect
           
    //        alert('Usuario Invalido'); 
    //     }

    // });



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
                <div className='container' >
                    <div className="div-top">
                        <BtnSlide page="entrar" />
                    </div>


                    <form className='entrar'>
                        <InputCad

                            fundo="Seu Email"
                            name={'email'}
                            tipo="email"
                            funcao={aoDigitar}
                            value={data.email}

                        />

                        <div className="field">

                            <InputCad

                                fundo="Sua Senha"
                                name={'senha'}
                                tipo="password"
                                funcao={aoDigitar}
                                value={data.senha}

                            />
                        </div>


                        <div className='divImg'>
                            <input type="submit" value="Entrar" onClick={logar} />
                        </div>
                    </form>
                    <div className="linha-div">
                    </div>
                    <br />
                    <center><p>Entrar Com</p></center>

                    <div className="redes-sociais">
                        <BsGoogle />
                        <BsFacebook />
                    </div>

                    <div className='termo'>
                        <br />
                        <br />
                        <a href="https://drive.google.com/file/d/1RcRpjUfn7Elwfr96cuZlLnIbazmbc90P/view?usp=sharing" id='termo'>
                            Termo de responsabilidade
                        </a>
                    </div>



                </div>
            </div>
        </div>
    );
}


export default Login;