
const eventEmmiter = require('events');
const myEmmiter = new eventEmmiter;

const welcomeUser = (name) =>{
console.log(`Welcome ${name} my good friend`)
}
const welcomeUser2 = () =>{
    console.log(`Welcome tjay my good friend`)
    }
myEmmiter.on('welcomer', welcomeUser)
myEmmiter.on('welcomer', welcomeUser2)

myEmmiter.emit('welcomer', 'shayne')