const fs = require("fs");
fs.readFile(__filename,()=>{
    console.log("the readfile")
})
setTimeout(()=>{
console.log("The set timeout")
},10)
process.nextTick(()=>{
    console.log("process nextick")
})
Promise.resolve().then(()=>{
    console.log("The promise")
})