const fs = require("fs/promises");

fs.readFile("./welcome.txt","utf-8",)
.then(
    data=>{console.log(data)}
).catch(err=>{console.log(err)})
