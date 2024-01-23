const fs = require('fs');
const content = fs.readFileSync("./file.txt", "utf-8")
console.log("Synchrounous")
console.log(content)
console.log("Async read")
fs.readFile("./file.txt","utf-8",(err,res)=>{
err?console.log(err): console.log(res)
})
console.log("program end")
fs.writeFileSync("./file.txt","Buenas Noches")