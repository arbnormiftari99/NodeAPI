const express = require('express');
const mongoose = require('mongoose');


const app = express();

app.get('/', (req, res) =>{
    res.send('Hello World!');
})


app.get('/blogs', (req, res) =>{
    res.send('Hello from blogs');
})



app.listen(3500, ()=>{
    console.log('listening on port 3500');
})

mongoose.connect
('mongodb+srv://admin:123456arbnor@cluster0.xr1y3vr.mongodb.net/?retryWrites=true&w=majority')
.then(() =>{
    console.log('MongoDB database connected successfully');
}).catch(err=> console.log(err))