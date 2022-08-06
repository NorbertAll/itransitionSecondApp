import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './suggestion.css'
import Button from '@mui/material/Button';

const SendMessage = (props) => {
    let {sender} =useParams();
    const [title, setTitle]=useState("");
    const [messageBody, setMessageBody]=useState("");
    const [recipient, setRecipient]=useState("");
    const [existRecipient, setExistRecipient]=useState([]);
    const [sugestions, setSugestions]=useState([]);
    let navigate=useNavigate();
    useEffect(() => {
              const recipients=async()=>{
                const response=await axios.get("http://localhost:3001/message/recipient")
                setExistRecipient(response.data)
                }
                recipients()
        
    }, []);
    const sendMessage=()=>{
      
        const data={sender:sender, title:title, message_body: messageBody, recipient: recipient};
        
        axios.post("http://localhost:3001/message", data).then((response) => {
           
                alert(response.data)
                window.location.reload(false)
            
        });
    }
    const onSuggestHandler = (text)=>{
      setRecipient(text)
      setSugestions([])
    }
    const onChangeHandler=(text)=>{
      let matches=[]
      if(text.length>0){
        matches =Object.values(existRecipient).filter(user=>{
          const regex=new RegExp(`${text}`, "gi");
          return user.match(regex)
        })
      }
      
      setSugestions(matches)
      setRecipient(text)
    }
  return <div>
    <Button variant="contained" color="error" onClick={()=>{navigate(`/`)}}>Back</Button>
    <h2>SendMessage</h2>
    <div>
    <label>Title</label><br/>
    <input type="text" onChange={(event)=>{
      setTitle(event.target.value); 
      }}/><br/>
    <label>Message</label><br/>
    <input type="text" onChange={(event)=>{setMessageBody(event.target.value);}}/><br/><div>
    <label>Recipient</label><br/>
    <input type="text" value={recipient} onChange={(event)=>{
      onChangeHandler(event.target.value);
    }}/>
    {sugestions && sugestions.map((sugestion, i)=>
    <div key={i} className="sugestion " onClick={()=>onSuggestHandler(sugestion)}  >{sugestion}</div>
    )}</div></div><br/>
    <Button variant="contained" onClick={() => sendMessage()}>Send</Button> 
    
  </div>;
};

export default SendMessage;
