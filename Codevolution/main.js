const eventEmmitter = require('events')
const emmiter = new eventEmmitter()
// listen to the emmiter
emmiter.on("order-pizza", (a,b)=>{
    console.log(`A ${a} and ${b} pizza ordered`)
})
emmiter.on("bake-pizza",(a,b)=>{
    console.log(`Baking ${a} and ${b} pizza`)
})
// broadcasting event
console.log("Starting pizza process")
emmiter.emit('order-pizza', "large", "pinapple")
console.log("Starting baking pizza process")
emmiter.emit('bake-pizza', "large", "pinapple")