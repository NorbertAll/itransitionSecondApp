const express= require('express');
const router =express.Router();
const {Users}= require("../models");


router.get('/', async (req, res)=>{
    const listOfMessages= await Users.findAll({where: {sender:sender}});
    res.json(listOfMessages);
});

router.post('/',async (req, res)=>{
    const {sender, title, message_body, recipient} =req.body;
    
    Users.create({
        sender: sender,
        title: title,
        message_body: message_body,
        recipient: recipient,
    })
    res.json("Success");
   
});

//router.post('/login',async (req, res)=>{
//    const {username, password} =req.body;
//    const user= await Users.findOne({where: {username:username}});
//    
//    if(!user){
//        res.json({error: "User Doesn't exist"});}
//    else{
//    
//        bcrypt.compare(password, user.password).then((match)=>{
//        if(!match){ 
//            res.json({error: "Wrong username or password"});
//            }
//        else{
//            if(user.status==='blocked'){
//                console.log("działa");
//                res.json("User blocked")
//            }else{
//                const accessToken = sign({username: user.username, id:user.id}, "importantsecret")
//                res.json({token: accessToken, username:username, id: user.id}) 
//                let date= new Date();
//                Users.update(
//                    { last_login_time: date.toLocaleString() },
//                    {where:{username:username}}
//                );
//            } 
//        }
//        
//    })}
//    
//
//});

// router.get('/byId/:id', async(req, res)=>{
//     const id= req.params.id
//     const user =await Users.findByPk(id)
//     res.json(user)
// });
// router.get('/token',validateToken,async (req, res)=>{
//     res.json(req.user);
// });
// router.post('/delete', async (req, res)=>{
//     let len=Object.keys(req.body).length;
//     for(let i=0; i<len; i++){
//         await Users.destroy({where:{id:req.body[i]}})
//     }
//     res.json('success delete');
//     //await Comments.destroy({where:{id:commentId}})
// });



module.exports = router;