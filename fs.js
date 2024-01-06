const fs = require ('fs');
const data = '\n My first node redone again'

// fs.mkdir('./testfolder', 
// (err) => {
//     err ? console.log(err.code): console.log("Folder created succesfully") 

// }
// )
// fs.writeFile('./testfolder/test.txt', data,{flag:'a'},
// (err)=>{
//     err? console.log(err.code): console.log("Write succesfull")
// }
// )
// fs.readFile('./testfolder/test.txt', {encoding:'binary'},
// (err, data)=>{
//     err? console.log(err.code): console.log(`The file has \n ${data}`)
// }
// )
// try{
//     fs.writeFileSync('./testfolder/Synctest',data)
//     console.log('write operation succesful')
//     fileData = fs.readFileSync('./testfolder/Synctest', {encoding:'utf-16le'})
//     console.log(fileData)
// }catch(err){
//     console.log(err.code)

// }
fs.readdir('./testfolder',(err, data)=>{
err? console.log(err.code): console.log(`Your files ${data}`)
})
