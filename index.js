const express = require('express');
const cors = require('cors');
const bodyParser  = require('body-parser')
const app = express()

const friends = ["Asfak","Farhan","Rayhan","Fuad","Kaka"];

app.use(cors());
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send('Hey Nazmul Keep The Hard Work');
})
app.get('/friends/:id',(req,res)=>{
    const id = req.params.id;
    const name = friends[id];
    res.send({name})
})
app.post('/addFriend',(req,res)=>{
    const user = req.body;
    console.log("data recived", req.body);
    res.send(user);
})

app.listen(3000,()=>{
    console.log('listening to the port 3000');
})