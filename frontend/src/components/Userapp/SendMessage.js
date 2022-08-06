import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const SendMessage = (props) => {
    let {sender} =useParams();
    const [title, setTitle]=useState("");
    const [messageBody, setMessageBody]=useState("");
    const [recipient, setRecipient]=useState("");

    const sendMessage=()=>{
        const data={sender:sender, title:title, message_body: messageBody, recipient: recipient};
        
        axios.post("http://localhost:3001/user/login", data).then((response) => {
            console.log(response.data);
        });
    }
  return <div>SendMessage
    
    <label>Title</label>
    <input type="text" onChange={(event)=>{setTitle(event.target.value);}}/>
    <label>Message</label>
    <input type="password" onChange={(event)=>{setMessageBody(event.target.value);}}/>
    <label>message_body:</label>
    <input type="recipient" onChange={(event)=>{setRecipient(event.target.value);}}/>
    <button onClick={() => sendMessage()}>Login</button>

  </div>;
};

export default SendMessage;
