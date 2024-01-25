const http = require('http')
const fs = require('fs')
const server = http.createServer(
    (req,res)=>{
        res.writeHead(200,{"Content-type":"text/html"})
fs.createReadStream("./index.html","utf-8").pipe(res)
    }
)
server.listen(5000,()=>{
    console.log("Listening at port 5000")
})
