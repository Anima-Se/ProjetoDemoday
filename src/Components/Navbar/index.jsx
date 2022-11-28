import Logo from '../../img/logo.png';
import './style.css';
import { BiUserCircle } from 'react-icons/bi';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Wave from '../../img/ondaNav.png';

const Barra = (() => {
  return (
    <>
      <div className='Pai_Nav'>

        <Navbar expand="lg" className='barraNav'>
          <Container className='contentNav'>
            <Link to={'/'}>
              <img
                src={Logo}
                width="130"
                className="d-inline-block align-right"
                alt="Anima-se Logo"
              />
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto LinksNav">
                <Link to={'/'} className='link'>HOME</Link>
                <Link to={'/Perguntas'} className='link'> PETS</Link>
                <Link to={'/Localizacao'} className='link'>LOCALIZAR</Link>
                <Link to={'/Calculadora'} className='link'>CALCULADORA</Link>
                <Link to={'/Aprendizagem'} className='link'>APRENDIZAGEM</Link>
              </Nav>
            </Navbar.Collapse>
            <Link to={"/Cadastro"} className='iconLogin'>
              <BiUserCircle id='iconLogin' />
            </Link>
          </Container>
        </Navbar>
        <img src={Wave} alt="" id='waveNavbar'/>
        {/* <svg width="100%" height="100%" id="ondaNav" viewBox="0 0 1440 500" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,500 C 0,500 0,250 0,250 C 152.64285714285717,296.8928571428571 305.28571428571433,343.7857142857143 419,334 C 532.7142857142857,324.2142857142857 607.5,257.75 705,248 C 802.5,238.25000000000003 922.7142857142858,285.2142857142857 1049,295 C 1175.2857142857142,304.7857142857143 1307.642857142857,277.3928571428571 1440,250 C 1440,250 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="#F8F9FA" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 250)"></path></svg> */}
      </div>
    </>
  )
})

export default Barra;