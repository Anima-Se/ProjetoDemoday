import React from "react";
import Barra from "../../Components/Navbar/barraHome";
import "./style.css";
import ImagemCard from "../../img/perfil-card.png";
import BotaoHome from "../../Components/btnHome";
import CardPerfil from "../../Components/Perfil/index";
import Grafico from "../../img/graficoPerfil.png";
import { HiChevronDoubleUp } from "react-icons/hi";
import Impulsionar from "../../Components/Perfil/Impulso";
import InformacoesPerfil from "../../Components/Perfil/Informacoes";
import Gatoback from "../../img/perfil-gato.jpg";
import FotoPerfil from "../../img/perfil-foto.jpg";
import { AiOutlineSetting } from 'react-icons/ai';
import  Footer from '../../Components/footer/footer'

function Perfil() {
  return (
    <>
      <div>
        <Barra />
      </div>
      <section className="main">

        <InformacoesPerfil
          background={Gatoback}
          foto={FotoPerfil}
          nome="Selena"
          icon={<AiOutlineSetting />}
          email="selenamuitafe@gmail.com"
          publicacoes="4"
        />

        <div className="perfil-border"></div>

        <div className="PerfilConteudo">
          {/* Esquerda */}
          <div className="perfil-esquerda">
            <div className="perfil-row">
              <h2>Suas Publicações</h2>
              <button id="botao-perfil">Nova Publicação</button>
            </div>

            <div className="PerfilCards">
              <CardPerfil
                imagem={ImagemCard}
                animal="Cachorro"
                titulo="Primeiro Banho"
                descricao="Aqui encontra um guia passo a passo para dar banho ao seu cachorro sem complicações desnecessárias "
              />

              <CardPerfil
                imagem={ImagemCard}
                animal="Cachorro"
                titulo="Primeiro Banho"
                descricao="Aqui encontra um guia passo a passo para dar banho ao seu cachorro sem complicações desnecessárias "
              />

              <CardPerfil
                imagem={ImagemCard}
                animal="Cachorro"
                titulo="Primeiro Banho"
                descricao="Aqui encontra um guia passo a passo para dar banho ao seu cachorro sem complicações desnecessárias "
              />

              <CardPerfil
                imagem={ImagemCard}
                animal="Cachorro"
                titulo="Primeiro Banho"
                descricao="Aqui encontra um guia passo a passo para dar banho ao seu cachorro sem complicações desnecessárias "
              />

              <CardPerfil
                imagem={ImagemCard}
                animal="Cachorro"
                titulo="Primeiro Banho"
                descricao="Aqui encontra um guia passo a passo para dar banho ao seu cachorro sem complicações desnecessárias "
              />

              <CardPerfil
                imagem={ImagemCard}
                animal="Cachorro"
                titulo="Primeiro Banho"
                descricao="Aqui encontra um guia passo a passo para dar banho ao seu cachorro sem complicações desnecessárias "
              />

              <CardPerfil
                imagem={ImagemCard}
                animal="Cachorro"
                titulo="Primeiro Banho"
                descricao="Aqui encontra um guia passo a passo para dar banho ao seu cachorro sem complicações desnecessárias "
              />

              <CardPerfil
                imagem={ImagemCard}
                animal="Cachorro"
                titulo="Primeiro Banho"
                descricao="Aqui encontra um guia passo a passo para dar banho ao seu cachorro sem complicações desnecessárias "
              />
            </div>
          </div>

          {/* Direita */}
          <div className="perfil-direita">
            <h2>Estatísticas</h2>

            <div className="conteudoDireita">
              <div className="ConteudoCimaPerfil">
                <img src={Grafico} alt="" />

                <div className="rowCores">
                  <div className="blockPerfil" id="verde"></div>
                  <p>Visitas ao Perfil</p>
                </div>
                <div className="rowCores">
                  <div className="blockPerfil" id="rosa"></div>
                  <p>Visitas aos Anúncios</p>
                </div>
                <div className="rowCores">
                  <div className="blockPerfil" id="amarelo"></div>
                  <p>Animais Adotados</p>
                </div>
                <div className="rowCores">
                  <div className="blockPerfil" id="roxo"></div>
                  <p>Visitas ao Perfil</p>
                </div>
              </div>
            </div>

            <div className="perfil-border" id="border-direita"></div>

            <Impulsionar
              titulo="IMPULSIONE SEU ANÚNCIO"
              descricao="Ao impulsionar seu anúncio , seu post receberá mais destaque em relação aos outros posts e suas chances de doação aumentam."
              aviso="OBS: Não garantimos que a doação será concretizada."
              btnTexto="Impulsionar"
              icon={<HiChevronDoubleUp />}
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Perfil;
