const http = require('http')
const server = http.createServer(
    (req,res)=>{
const superHero = {
    firstname:"Bruce",
    secondName:"Wayne"
}
payload = JSON.stringify(superHero)
res.writeHead(200, {"Content-Type":"text/html"})
res.end("<h1>Niaje hapo leo</h1>")
    }
)
server.listen(5000,()=>{
    console.log("Listening at port 5000")
})
