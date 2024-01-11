const fs = require('fs');
const http = require('http')

const home = fs.readFileSync('./navbar/index.html')
const server = http.createServer(
    (req,res)=>{
        res.writeHead(200,{'content/type':'text/html'})
        res.write(home);
        res.end();
    }
)
server.listen(5000, ()=>{
    console.log('Were listening to port 5000')
})
