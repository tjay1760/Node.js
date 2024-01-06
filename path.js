const path = require ('path');
const mypath = '/home/tjay/Documents/myprojects/NodeJS/Node.js/path.js'
const pathInfo ={
filename:path.basename(mypath),
folderName:path.dirname(mypath),
fileExtention: path.extname(mypath),
isAbsolute:path.isAbsolute(mypath),
separator:path.sep,
joinedPath: path.join('top', 'middle', 'thefile.md')
}
module.exports = pathInfo