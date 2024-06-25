// const {format} = require("date-fns")
// console.log(format(new Date(),'ddMMyyyy\tHH:mm:ss'))

// const { format } = require("date-fns")

// const {format} = require("date-fns")
// const {v4:uuid}=require("uuid")
// console.log(format(new Date(),'ddMMyyyy\tHH:mm:ss'))
// console.log(uuid())

const {format}=require('date-fns')
const{v4:uuid}=require('uuid')
const fs=require('fs')
const fspromises=require('fs').promises
const path=require('path')
const logEvents=async(message,logName)=>{
    const dateTime=`${format(new Date(),"ddMMyyyy\tHH:mm:ss")}`
    const logItem=`${dateTime}\t${uuid()}\t${message}\n`
    try{
        if(!fs.existsSync(path.join(__dirname,'..','logs'))){
            await fspromises.mkdir(path.join(__dirname,'..','logs'))
        }
        await fspromises.appendFile(path.join(__dirname,'..','logs',logName),logItem)

    }catch(err){
        console.error(err)
    }

}
const logger =(req,res,next)=>{
    logEvents(`${req.method}\t${req.header.orgin}\t${req.url}`,'reqlog.txt')
    console.log(`${req.method} ${req.path}`)
    next()
  }

module.exports={logger,logEvents}