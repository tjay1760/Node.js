const pizzaShop = require('./pizzaShop')
mypizzashop = new pizzaShop();
mypizzashop.on("order", (size,topping)=>{
    console.log(`Your pizza is ${size} with ${topping} toppings `)
})
mypizzashop.order("Large", "Pinapple")
mypizzashop.display() 