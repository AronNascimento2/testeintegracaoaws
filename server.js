const express = require('express');

const app = express();

app.use(express.json());

app.get('/',(req, res)=>{
    return response.json({message:"ok"});
})

app.get('/atualizou',(req, res)=>{
    return response.json({message:"atualizou"});
})
app.post('/teste',(req, res)=>{
    const {name,date} = req.body;
    return response.json({name,date});
})

app.listen(3333)