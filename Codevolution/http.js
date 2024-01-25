const http = require('http')
const fs = require('fs')
const server = http.createServer(
    (req,res)=>{
        const html = fs.readFileSync("./index.html","utf-8")
const superHero = {
    firstname:"Bruce",
    secondName:"Wayne"
}
payload = JSON.stringify(superHero)
res.writeHead(200, {"Content-Type":"text/html"})
res.end(html)
    }
)
server.listen(5000,()=>{
    console.log("Listening at port 5000")
})
