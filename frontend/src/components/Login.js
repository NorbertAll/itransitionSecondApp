import React, {  useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from "@mui/material";

const Login = () => {
    const [sender, setSender]=useState("");
   

    let navigate=useNavigate();
    
  return (
    <div className="flex justify-center items-center flex-col h-screen gap-8">
    <h1 className="text-6xl">Username</h1>
    <div className="flex flex-col gap-2">
        <TextField
          label="Username"
          className="w-80"
          type="text"
          required
          onChange={(event)=>{setSender(event.target.value);}}
        />
        <br/><br/>
        <Button variant="contained" onClick={()=>{navigate(`/userapp/${sender}`)}}>Login</Button>
        </div>
    </div>

  );
};

export default Login;








  


