import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Messages from "./Messages";
import SendMessage from "./SendMessage";
import Alert from 'react-bootstrap/Alert';

export const Userapp = () => {
    let {sender} =useParams();
    
    
    
  return <div>
    <h1><b>Hello {sender}</b></h1>
    <SendMessage sender={sender} />
    <hr/>
    <Messages sender={sender} />

    
  </div>;
};
