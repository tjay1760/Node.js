const eventEmmiter = require('events');
const myEmmiter = new eventEmmiter;

const welcomeUser = (name) =>{
console.log(`Welcome ${name} my good friend`)
}

myEmmiter.on('welcomer', welcomeUser)

myEmmiter.emit('welcomer')