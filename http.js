const http = require('http')
const server = http.createServer((req,res)=>{
    if (req.url == '/'){
         res.write('<h1>Ny header request</h1>')
         res.end()
    }else{
        res.end('Not available')}
})
server.listen('5000',()=>{
    console.log('Server listening at port 5000')
}
)