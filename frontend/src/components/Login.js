import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [sender, setSender]=useState("");
   

    let navigate=useNavigate();
    
  return (
    <div className="loginContainer">
        <label>Username:</label>
        <input type="text" onChange={(event)=>{setSender(event.target.value);}}/>
        <button onClick={()=>{navigate(`/userapp/${sender}`)}}>Login</button>
    </div>

  );
};

export default Login;








  


