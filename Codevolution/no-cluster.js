const http =require('http');
const server = http.createServer((req,res)=>{
if(req.url==="/"){
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("Homepage")
}else if (req.url==="/slow"){
    for(let i=0;i<2000;i++){}
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("Slow page")
}
})
server.listen(5000,()=>{
    console.log("Server started at port 5000")
})