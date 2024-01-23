const fs = require("fs");
const zlib = require("zlib")
const gzip = zlib.createGzip()
const readableStream = fs.createReadStream("./streams.txt",{encoding:"utf8",highWaterMark:2})
readableStream.pipe(gzip).pipe(fs.WriteStream('./file.txt.gz'))
const writablestream = fs.createWriteStream("./streamswrite.txt",{encoding:"utf-8"})
// readableStream.on("data",(chunk)=>{
// console.log(chunk)
// writablestream.write(chunk)
// })
readableStream.pipe(writablestream)