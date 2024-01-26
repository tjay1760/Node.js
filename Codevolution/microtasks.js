// console.log("ONE")
// process.nextTick(()=>{
//     console.log("Process.nextick 1")
// })
// console.log("TWO")

Promise.resolve().then(()=>{
    console.log("Promise.resolve 1")
})
process.nextTick(()=>{
    console.log("Process.nextick 1")
})