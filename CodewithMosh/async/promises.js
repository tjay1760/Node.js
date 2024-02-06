
const mypromise = new Promise((resolve,reject)=>{
    //Do asyc operattion here
setTimeout(()=>{
    console.log()
    resolve(1);
},2000)

})

const my2promise = new Promise((resolve,reject)=>{
    //Do asyc operattion here
setTimeout(()=>{
    resolve(1);
},2000)

})
Promise.all([mypromise,my2promise]).then(result=>(console.log(result)))
