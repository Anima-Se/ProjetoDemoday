import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes,Route,Link,useNavigate } from 'react-router-dom';

const Dashboard=()=>{
    
    const [auth,setAuth]=useState('');
    let navigate = useNavigate(); // Use for Navigate on Previous
    useEffect(()=>{
        var auth = localStorage.getItem('email'); 
        setAuth(auth);
      },
      [])
    if(auth===null){
        navigate(`/login`);
    }
    return(
        <div>
              Welcome to Private Page 
        </div>
    )
}

export default Dashboard;