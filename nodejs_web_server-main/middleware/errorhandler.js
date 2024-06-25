const { logEvents } = require("./logEvents");

const errorhandler=(err,req,res,next)=>{
    logEvents(`${err.name}:${err.message}`,'errlog.txt');
    console.error(err.stack)
    res.sendStatus(500).send(err.message);
    next()
}
module.exports=errorhandler;