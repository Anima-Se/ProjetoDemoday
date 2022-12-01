import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route, Routes, BrowserRouter, Link} from "react-router-dom"

import './index.css';

import  Pergunta  from './pages/Pergunta';
import Cadastro  from './pages/Cadastro';
import Cadastro1 from './Components/etapa_cadastro/cadastro_01';
import Cadastro2 from './Components/etapa_cadastro/cadastro_02';
import Cadastro3 from './Components/etapa_cadastro/cadastro_03';
import Cadastro4 from './Components/etapa_cadastro/cadastro_04';
import CadastroPet from './pages/Cadastro_pet';
import Home from './pages/Home';
import Navbar from './Components/Navbar';
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
