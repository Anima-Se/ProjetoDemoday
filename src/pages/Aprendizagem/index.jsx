
import React from "react";
import Barra from "../../Components/Navbar";
import '../../pages/Aprendizagem/style.css';
import Bolaaprender from '../../Components/bolaaprender/index.jsx';
import Computador from '..//../img/pcAprender.png';
import Meio from '../../Components/iconesAprender';
import Card2 from "../../Components/Card2";
import GatoAprendizagem from '../../img/gatoAprendizagem.png';
import CachorroAprender from '../../img/cachorroAprender.png';
import Calopsita from '../../img/calopsita.png';
import Peixe from '../../img/peixe.png';
import TartarugaAprender from '../../img/tartarugaAprender.png';
import Aquario from '../../img/aquario.png';
import CoelhoAprender from '../../img/coelhoAprender.png';
import CoelhoAprender2 from '../../img/coelhoAprender2.png';
import HamsterAprender from '../../img/hamsterAprender.jpg';
import Rodape from '../../Components/footer/footer';



function Aprendizagem(){

    return(

        <>
            <Barra/>
            <section className="aprender">
                <div className="topo">
                    <div className="lado1">
                        <Bolaaprender/>
                    </div>
                    <div className="lado2">
                        <img src={Computador} className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="iconsAprender">
                    <Meio titulo="Todos"/>
                    <Meio titulo="Cachorro"/>
                    <Meio titulo="Gato"/>
                    <Meio titulo="Aves"/>
                    <Meio titulo="Roedores"/>
                    <Meio titulo="Peixes"/>
                    <Meio titulo="Coelhos"/>
                    <Meio titulo="Répteis"/>
                </div>
                <div className="cardsAprender">
                    
                    <Card2 img={CoelhoAprender2} pet="Coelho" titulo="Doença em coelho, como prevenir" texto="Assim como humanos, os animais podem ficar doentes por motivos genéticos, manejo inadequado ou idade avançada."/>
                    
                    <Card2 img={HamsterAprender} pet="Hamster" titulo="Cuide bem deles" texto="Assim como nós, os animais merecem viver bem, aprenda aqui as melhores técnicas para garantir que seu bichinho está feliz e saudável."/>
                    
                    <Card2 img={CoelhoAprender} pet="Coelho" titulo="O que o coelho come?" texto="Descubra o que o coelho come, e mais, quais os principais cuidados que você precisa ter com a saúde do seu amigo orelhudo."/>

                    <div className="quebra"></div>

                    <Card2 img={Peixe} pet="Peixes" titulo="Alimentação Correta" texto="Os peixes são animais tranquilos para se ter em casa, e como qualquer animal de estimação, eles precisam dos cuidados corretos e muito amor para crescerem de forma saudável."/>
                    
                    <Card2 img={TartarugaAprender} pet="Tartaruga" titulo="Como cuidar do pet" texto="Nossos pets precisam de certos cuidados durante a vida deles, conheça aqui sobre o cuidado que você precisa ter com seu amiguinho."/>
                    
                    <Card2 img={Aquario} pet="Gato" titulo="Primeiro Banho" texto="Você sabe que os felinos têm fama de não gostarem de água, não é? Será que eles precisam mesmo de banho? Como lavar?  Se você tem essa e outras dúvidas, este artigo vai ajudar."/>

                    <div className="quebra"></div>

                    <Card2 img={CachorroAprender} pet="Cachorro" titulo="Pelo saudável" texto="Aqui você vai ficar sabendo como cuidar do pelo do seu cachorro para que ele fique limpo, forte e brilhante. "/>

                    <Card2 img={Calopsita} pet="Calopsita" titulo="Iniciantes precisam Saber!" texto="A calopsita é uma ave que conquistou os brasileiros e se tornou um dos passarinhos de estimação mais procurados."/>

                    <Card2 img={GatoAprendizagem} pet="Gato" titulo="Primeiro Banho" texto="Você sabe que os felinos têm fama de não gostarem de água, não é? Será que eles precisam mesmo de banho? Como lavar?  Se você tem essa e outras dúvidas, este artigo vai ajudar."/>
                </div>
            </section>
            <Rodape/>
        </>
        

    );

}

export default Aprendizagem;
