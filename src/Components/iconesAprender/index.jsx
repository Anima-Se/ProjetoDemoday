import React from 'react';
import '../iconesAprender/style.css'
import PataAprender from '../../img/pataAprender.png';

function Meio({titulo}){
    return(
        
        <div className='iconesAprendizagem'>
            <img src={PataAprender} alt="" />
            <p>{titulo}</p>
        </div>
    )
}

export default Meio;

