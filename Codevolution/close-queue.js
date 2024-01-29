const fs = require("fs")
const readableStream = fs.createReadStream(__filename)
readableStream.close()
readableStream.on('close', ()=>{
console.log("This is from the readable stream close")
})
setImmediate(()=>{
    console.log("this is the set immidiate 1")
})
setTimeout(()=>{
    console.log("this is the set timeout 1")
},0)