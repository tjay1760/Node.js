const fs = require ('fs');
const data = 'My first node redone again'

fs.mkdir('./testfolder', 
(err) => {
    err ? console.log(err.code): console.log("Folder created succesfully") 

}
)
fs.writeFile('./testfolder/test.txt', data,
(err)=>{
    err? console.log(err.code): console.log("Write succesfull")
}
)