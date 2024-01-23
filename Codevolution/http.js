const http = require('http')
const server = http.createServer(
    (req,res)=>{
res.writeHead(200, {"Content-Type":"text/plain"})
res.end("HEllo World")
    }
)
server.listen(5000,()=>{
    console.log("Listening at port 5000")
})