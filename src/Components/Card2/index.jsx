import Card from 'react-bootstrap/Card';
import './style.css';
import BtnComecar from '../btnInicio/btnInicio';

function Card2({img, pet, titulo, texto}) {
  return (
    <>
        <Card className='card'>
        <img src={img} id="imagem"alt="" />
        <Card.Body>
            <p>{pet}</p>
            <div className='linhaCard'>
                <h2>{titulo}</h2>
                <BtnComecar txtBtn="Aprender"/>
            </div>
            <p>{texto}</p>
        </Card.Body>
        </Card>
    </>  
  );
}

export default Card2;
