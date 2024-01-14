const http = require('http')
const server = http.createServer((req,res)=>{
    if (req.url == '/'){
        res.writeHead(200,{'content-type':'application/json'})
         res.write('<h1>New header request</h1>')
         res.end()
    }else{
        res.end('Not available')}
})
server.listen('5000',()=>{
    console.log('Server listening at port 5000')
}
)