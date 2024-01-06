const fs = require ('fs');


fs.mkdir('./testfolder', 
(err) => {
    err ? console.log(err): console.log("Folder created succesfully") 

}
)