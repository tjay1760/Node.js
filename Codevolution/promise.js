const fs = require("fs/promises");
console.log("before read")
fs.readFile("./welcome.txt","utf-8",)
.then(
    data=>{console.log(data)}
).catch(err=>{console.log(err)})
console.log("after read")
// async await version
async function readFile() {
    try{
const data = await fs.readFile("./welcome.txt","utf-8")
console.log(data)
    }
    catch(err){
        console.log(err)
    }
}
readFile()
