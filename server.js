const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    res.send('Hello World!');
})

app.listen(3500, ()=>{
    console.log('listening on port 3500');
})