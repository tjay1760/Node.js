const fs = require ('fs');
const data = '\n My first node redone again'

fs.mkdir('./testfolder', 
(err) => {
    err ? console.log(err.code): console.log("Folder created succesfully") 

}
)
fs.writeFile('./testfolder/test.txt', data,{flag:'a'},
(err)=>{
    err? console.log(err.code): console.log("Write succesfull")
}
)
fs.readFile('./testfolder/test.txt', {encoding:'utf8'},
(err, data)=>{
    err? console.log(err.code): console.log(`The file has \n ${data}`)
}
)