import React from 'react';
import './inputLabel.css';

const Option = (({value, change, text}) =>{
    return(
        <>

                <option value={value} onChange={change}>{text}</option>
               
        </>
    )   
})

export default Option;
