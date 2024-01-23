const http = require('http')
const server = http.createServer(
    (req,res)=>{
const superHero = {
    firstname:"Bruce",
    secondName:"Wayne"
}
payload = JSON.stringify(superHero)
res.writeHead(200, {"Content-Type":"application/json"})
res.end(payload)
    }
)
server.listen(5000,()=>{
    console.log("Listening at port 5000")
})
