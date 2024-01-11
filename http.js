const http = require('http')
const server = http.createServer((req,res)=>{
    req.url == '/'? res.end('hello world'):res.end('Not available')
})
server.listen('5000',()=>{
    console.log('Server listening at port 5000')
}
)