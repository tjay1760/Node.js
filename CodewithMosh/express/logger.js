const logger = (req,res,next)=>{
    console.log("Logging new")
    next()
    }
    module.exports = logger;