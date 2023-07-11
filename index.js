const mongoose  = require('mongoose')
const express = require('express')
const cors = require('cors');
const dotenv = require('dotenv')
require('./db/config') 
const user = require('./db/model/user')

const app = express();
app.use(express.json());
app.use(cors())
dotenv.config();

const PORT =process.env.PORT ||  4500;

app.post('/user' , async(req , resp)=>{
    const data = new user(req.body);
    const result = await data.save();
    resp.send(result)
})

app.get('/login/:email/:password' , async(req , resp)=>{
    const result = await user.find({email : req.params.email , password : req.params.password});
    resp.send(result);
})

app.get('/user' , async(req , resp)=>{
    const result = await user.find();
    resp.send(result)
})

app.listen(PORT)