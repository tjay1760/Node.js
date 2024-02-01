 const express = require('express');
 const app = express();
 app.get('/',(req,res)=>{
    res.send("Hi there")
 })
 app.get('/api/v1',(req,res)=>{
    res.send([1,2,3])
 })

app.get("/api/v1/:id",(req,res)=>{
    res.send(req.params)
})
 //PORT
 port = process.env.PORT || 3000;
 app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
 })
