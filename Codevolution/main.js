const eventEmmitter = require('events')
const emmiter = new eventEmmitter()
// listen to the emmiter
emmiter.on("order-pizza", (a,b)=>{
    console.log(`A ${a} and ${b} pizza ordered`)
})
// broadcasting event
emmiter.emit('order-pizza', "large", "pinapple")
