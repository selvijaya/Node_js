const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT||3
app.get('^/$|index(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'))
})
app.get('^/$|newpage(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','newpage.html'))
})
app.get('/oldpage(.html)?',(req,res)=>{
    res.redirect(301,'/newpage.html')
})
app.get('/hello(.html)?',(req,res,next)=>{
    console.log("hello file is loaded")
    next()
},(req,res)=>{
    res.send("hii! hello")
})
const one=(req,res,next)=>{
    console.log('one')
    next()
}
const two = (req,res,next)=>{
    console.log('two')
    next()
}
const three = (req,res)=>{
    console.log('three')
    res.send("finished Files")
}
app.get('/chain(.html)?',[one,two,three])
app.get('/*',(req,res)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})
app.listen(port,()=>console.log('sever is running on '+port))
