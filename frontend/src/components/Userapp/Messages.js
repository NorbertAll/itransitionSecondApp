import axios from "axios";
import React, { useEffect, useState } from "react";

const Messages = (props) => {
    const [listOfMessages, setListOfMessages]=useState([]);
    useEffect(()=>{
        
        axios.post("http://localhost:3001/message/messeges", {'sender': props.sender}).then((response)=>{
            setListOfMessages(response.data)
            
        }) 
       }, [])

  return(<>
  <h2>Messages</h2>
 
  {listOfMessages.map((value)=>{
            return <div className="message" key={value.id} >
              <div className='sender'>{value.sender}</div>
              <div className='title'>{value.title}</div>
              <div className='message_body'>{value.message_body}</div>
              <div className='message_body'>{value.recipient}</div>
            </div>
          })}
    
  </>
  ) ;
};

export default Messages;
