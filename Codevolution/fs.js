const fs = require('fs');
const content = fs.readFileSync("./file.txt", "utf-8")
console.log(content)