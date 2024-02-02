const http = require("http");
const server = http.createServer((req,res)=>{
res.writeHead(200,{"Content-Type":"text/html"})
res.end("<h1>Heading</h1>")
})
server.listen(5000,()=>{
    console.log("server running on port 5000")
})

