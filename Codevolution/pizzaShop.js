const eventEmmitter = require('events')
class PizzaShop extends eventEmmitter{
    constructor(){
        super()
        this.orderNumber = 0;
    }
    order(size, topping){
        this.orderNumber++
this.emit("order", size,topping)
    }
    display(){
        console.log(`The orders are ${this.orderNumber}`)
    }
}
module.exports = PizzaShop;