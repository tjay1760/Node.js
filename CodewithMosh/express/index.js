 const express = require('express');
 const app = express();
 app.use(express.json())
 const people =[
    {
        id: 1,
        name:"John",
    },
    {
        id: 2,
        name:"Pete",
    },
      {
        id: 3,
        name:"Josh",
      }  ,{
        id: 4,
        name:"Gary"
      }
 ]
 app.get('/',(req,res)=>{
    res.send("Main")
 })
 app.get('/api/v1',(req,res)=>{
    res.send(people)
 })
 app.post('/api/v1',(req,res)=>{
const person ={
    id: people.length+1,
    name: req.body.name
}
people.push(person);
res.send(person)
 })

app.get("/api/v1/:id",(req,res)=>{
    const person = people.find(c=>c.id === parseInt(req.params.id))
    if (!person){
        res.status(404).send("person not available")
    }
    res.send(person)
})
 //PORT
 port = process.env.PORT || 3000;
 app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
 })
