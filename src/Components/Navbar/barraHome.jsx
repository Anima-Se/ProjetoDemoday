import Logo from '../../img/logo.png';
import './style.css';
import { BiUserCircle } from 'react-icons/bi';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

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
          <Dropdown>
            <Dropdown.Toggle variant="white" id="dropdown-basic">
              <BiUserCircle id='iconLogin' />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              
                <Dropdown.Item ><Link to={"/Perfil"} className='link-dropdown'>Perfil </Link></Dropdown.Item>
                <Dropdown.Item ><Link to={"/Login"} className='link-dropdown'>Login </Link></Dropdown.Item>
                <Dropdown.Item ><Link to={"/Cadastro"} className='link-dropdown'>Resgistrar </Link></Dropdown.Item>
             
              
            </Dropdown.Menu>
          </Dropdown>

        </Container>
      </Navbar>
    </>
  )
})

export default Barra;