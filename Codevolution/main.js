const eventEmmitter = require('events')
const emmiter = new eventEmmitter()
// listen to the emmiter
emmiter.on("order-pizza", ()=>{
    console.log("Emmiter started")
})
// broadcasting event
emmiter.emit('order-pizza')
