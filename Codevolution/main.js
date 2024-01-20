const pizzaShop = require('./pizzaShop')
const DrinkMachine = require('./drink-machine')
mypizzashop = new pizzaShop();
drink_machine = new DrinkMachine();
mypizzashop.on("order", (size,topping)=>{
    console.log(`Your pizza is ${size} with ${topping} toppings `)
    drink_machine.serveDrink(size)
})
mypizzashop.order("Large", "Pinapple")
mypizzashop.display() 
console.log("𖩨".charCodeAt())