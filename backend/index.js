const express= require('express');
const app = express();
const cors =require('cors');
app.use(express.json());
app.use(cors());


const db = require('./models');

const userRouter = require('./routes/Message');
app.use("/message", userRouter);
//const commentRouter = require('./routes/Comments');
//app.use("/comments", commentRouter);



db.sequelize.sync().then(()=>{
    app.listen(3001, ()=>{
        console.log("Server running");
    })
})
