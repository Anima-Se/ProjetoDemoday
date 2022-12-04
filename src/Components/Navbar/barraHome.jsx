import Logo from '../../img/logo.png';
import './style.css';
import {BiUserCircle} from 'react-icons/bi';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Barra = (() => {
  return (
    <>
      <Navbar bg="light" expand="lg" className='barraNav' fixed="top">
        <Container className='contentNavH'>
          
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
                <Link to={'/Calculadora'} className='link'>CALCULAR</Link>
                <Link to={'/Aprendizagem'} className='link'>APRENDIZAGEM</Link>
              </Nav>
            </Navbar.Collapse>
            <Link to={"/Login"} className='iconLogin'> 
                <BiUserCircle id='iconLogin'/>
            </Link>
        </Container>
      </Navbar>
    </>
  )
})

export default Barra;