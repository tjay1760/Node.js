console.log("ONE")
process.nextTick(()=>{
    console.log("Process.nextick 1")
})
console.log("TWO")