const express= require('express');
const router =express.Router();
const {Message}= require("../models");


router.post('/messeges', async (req, res)=>{
    const {sender } =req.body;
    const listOfMessages= await Message.findAll({where: {recipient:sender}});
    res.json(listOfMessages);
});

router.get('/recipient', async (req, res)=>{
    const listOfRecipient= await Message.findAll();
    let result=[]
    for(let i=0; i<listOfRecipient.length; i++)
        result=[...result, listOfRecipient[i].dataValues.recipient];
    const unique = result.filter((v, i, a) => a.indexOf(v) === i);
    res.json({...unique});
});

router.post('/',async (req, res)=>{
    const {sender, title, message_body, recipient} =req.body;
    
    Message.create({
        sender: sender,
        title: title,
        message_body: message_body,
        recipient: recipient,
    })
    res.json("Success");
   
});

module.exports = router;