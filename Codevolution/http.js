const http = require('http')
const fs = require('fs')
const server = http.createServer(
    (req,res)=>{
        const name = "Tjay"
        res.writeHead(200,{"Content-type":"text/html"})
let html = fs.readFileSync("./index.html","utf-8")
html = html.replace("{{name}}",name)
req.url==="/"?res.end(html):res.end("Invalid request")
    }
)
server.listen(5000,()=>{
    console.log("Listening at port 5000")
})
