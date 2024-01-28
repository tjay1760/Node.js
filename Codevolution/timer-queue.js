setTimeout(()=>{
    console.log("Set Timeout 1000")
},1000)
setTimeout(()=>{
    console.log("Set Timeout 500")
},500)
setTimeout(()=>{
    console.log("Set Timeout 0")
},0)
// setTimeout(()=>{
//     process.nextTick(()=>{
//         console.log("process nextick inside setimout 2")
//     })
//     Promise.resolve().then(()=>{
//         console.log("Promise inside setimeout")
//         })
//     console.log("Set Timeout 2")
// },0)
// setTimeout(()=>{
//     console.log("Set Timeout 3")
// },0)
// process.nextTick(()=>{
// console.log("process nextTick 1")
// })
// process.nextTick(()=>{
//     console.log("Process nextick 2")
//     process.nextTick(()=>{
//         console.log("inside process nextick 2")
//     })
// })
// process.nextTick(()=>{
//     console.log("process nextick 3")
// })
// Promise.resolve().then(()=>{
// console.log("Promise 1")
// })
// Promise.resolve().then(()=>{
//     console.log("Promise 2")
//     process.nextTick(()=>{
//         console.log("nextic inside the promise")
//     })
// })
// Promise.resolve().then(()=>{
//     console.log("promise 3")
// })