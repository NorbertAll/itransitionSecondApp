import axios from "axios";
import React, { useEffect, useState } from "react";
import "./message.css"

const Messages = (props) => {
    const [listOfMessages, setListOfMessages]=useState([]);
    useEffect(()=>{
      axios.post("http://localhost:3001/message/messeges", {'sender': props.sender}).then((response)=>{
          setListOfMessages(response.data)
         ;})
      const intervalId=setInterval(() => {
          axios.post("http://localhost:3001/message/messeges", {'sender': props.sender}).then((response)=>{
          setListOfMessages(response.data)
          ;})
      }, 5000);
      return()=>{
          clearInterval(intervalId);
      }
      },[]);
    

  return(<>
  <h2>Messages</h2>
 
  {listOfMessages.map((value)=>{
            return <div className="mes" key={value.id} >
              <div className='sender'>sender: {value.sender}</div>
              <div className='title'>title: {value.title}</div>
              <div className='message_body'>message_body:<br/>{value.message_body}</div>
              <div className='recipient'>recipient: {value.recipient}</div>
            </div>
          })}
    
  </>
  ) ;
};

export default Messages;
