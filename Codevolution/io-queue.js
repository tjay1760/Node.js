const fs = require("fs");
fs.readFile(__filename,()=>{
    console.log("the readfile")
})
setTimeout(()=>{
console.log("The set timeout")
},0)
process.nextTick(()=>{
    console.log("process nextick")
})
Promise.resolve().then(()=>{
    console.log("The promise")
})
setImmediate(()=>{
    console.log("this is the set immidiate")
})
for(let i=0; i<200000000; i++){

}