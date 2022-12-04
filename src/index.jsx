import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route, Routes, BrowserRouter, Link} from "react-router-dom"

import './index.css';

import  Pergunta  from './pages/Pergunta';
import Cadastro  from './pages/Cadastro';
import Login  from './pages/Login/login.jsx';
import CadastroPet from './pages/Cadastro_pet';
import Home from './pages/Home';
import Navbar from './Components/Navbar/index';
import Calculadora from './pages/Calculadora';
import Conhecer from './pages/Conhecer';
import Pets from './pages/Pets';
import Aprendizagem from './pages/Aprendizagem';
import Perfil from './pages/Perfil';
import Localizacao from './pages/Localizacao';

function App() {
   return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Perguntas' element={<Pergunta />} />;
            <Route path='/Cadastro' element={<Cadastro /> } />
            <Route path='/Login' element={<Login /> } />
            <Route path='/CadastroPet' element={<CadastroPet/> } />
            <Route path='/Navbar' element={<Navbar/>}/>
            <Route path='/Aprendizagem' element={<Aprendizagem/>}/>
            <Route path='/Pets' element={<Pets/>}/>
            <Route path='/Calculadora' element={<Calculadora/>}/>
            <Route path='/Perfil' element={<Perfil/>}/>
            <Route path='/Localizacao' element={<Localizacao/>}/>
            <Route path='/Conhecer' element={<Conhecer/>}/>
        
        
          
          </Routes>
      </BrowserRouter>


    </>
   )
 };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <div>
      <App />
   </div>
);
