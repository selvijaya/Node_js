const {format} = require('date-fns')
const {v4:uuid} = require('uuid')
const path = require('path')
const fs = require('fs')
const fspromises = require('fs').promises

const logEvent = async(message) =>{
    const dateTime = `${format(new Date(),'dd:mm:yyyy\thh:mm:ss')}`
    const logIterms = `${dateTime}\t${uuid()}\t${message}\n`
    console.log(logIterms)
    try{
        if(!fs.existsSync(path.join(__dirname,'loged'))){
            await fspromises.mkdir(path.join(__dirname,'loged'))
        }
        await fspromises.appendFile(path.join(__dirname,'loged','eventfile.txt'),logIterms)
    }
    catch(err){
        console.log(err)
    }

}
module.exports=logEvent