let res;
const mypromise = new Promise((resolve,reject)=>{
    //Do asyc operattion here
setTimeout(()=>{
    resolve(1);
        // reject(new Error())
},2000)

    // reject(new Error())
})
mypromise.then((result)=>{console.log(`The result is ${result}`); res=result}).catch(err=>console.log(`Your error ${err}`))

