setImmediate(()=>{
    console.log("this is the set immidiate 1")
})
setImmediate(()=>{
    console.log("this is the set immidiate 2")
    process.nextTick(()=>{
        console.log("THis is the process nextick 1")
    })
    Promise.resolve().then(()=>{
        console.log("This is the promise resolve 1")
    })
})
setImmediate(()=>{
    console.log("this is the set immidiate 3")
})