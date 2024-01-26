const fs = require('fs');
console.log("ONE")
fs.readFile("./welcome.txt","utf-8",(err,data)=>{
    console.log("Reading file")
console.log(data)
})
console.log("second")
