const crypto = require("crypto")
const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 2;
const MAX_CALLS = 2;
for (let i=0; i<MAX_CALLS;i++){
    crypto.pbkdf2("password","salt",100000,512,"sha512",()=>{
        console.log(`Hash: ${i+1}`, Date.now()-start)
    })
}


// crypto.pbkdf2Sync("password","salt",100000,512,"sha512")
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512")
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512")

// console.log("Hash:", Date.now()-start)