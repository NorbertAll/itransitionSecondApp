import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Messages from "./Messages";
import SendMessage from "./SendMessage";


export const Userapp = () => {
    let {sender} =useParams();
    


    
  return <div>
    <b>{sender}</b>
    <SendMessage sender={sender} />
    <Messages sender={sender} />

    
  </div>;
};
