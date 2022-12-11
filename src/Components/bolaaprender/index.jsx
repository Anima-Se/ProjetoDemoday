import React from 'react';
import '../../Components/bolaaprender/style.css';
import Bolaimg from '../../img/bolaaprender.png';


function Bolaaprender(){
    return(
        <div id='bolalaranja'>
            <img src={Bolaimg} className="img-fluid" alt="Bola laranja" />
            <h2>APRENDA</h2>
            <p>no conforto de sua casa e para o conforto do seu animal</p>
        </div>  
    );
};

export default Bolaaprender;