const fs = require('fs');
const content = fs.readFileSync("./file.txt", "utf-8")
console.log(content)
fs.readFile("./file.txt","utf-8",(err,res)=>{
err?console.log(err): console.log(res)
})