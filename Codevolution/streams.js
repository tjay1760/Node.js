const fs = require("fs");
const readableStream = fs.createReadStream("./streams.txt",{encoding:"utf8"})
const writablestream = fs.createWriteStream("./streamswrite.txt",{encoding:"utf-8"})
readableStream.on("data",(chunk)=>{
console.log(chunk)
writablestream.write(chunk)
})
