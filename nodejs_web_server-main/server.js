// const http = require('http');
// const path = require('path');
// const fs = require('fs');
// const fsPromises = require('fs').promises;

// const logEvents = require('./logEvents');
// const EventEmitter = require('events');
// class Emitter extends EventEmitter { };
// // initialize object 
// const myEmitter = new Emitter();
// myEmitter.on('log', (msg, fileName) => logEvents(msg, fileName));
// const PORT = process.env.PORT || 3500;

// const serveFile = async (filePath, contentType, response) => {
//     try {
//         const rawData = await fsPromises.readFile(
//             filePath,
//             !contentType.includes('image') ? 'utf8' : ''
//         );
//         const data = contentType === 'application/json'
//             ? JSON.parse(rawData) : rawData;
//         response.writeHead(
//             filePath.includes('404.html') ? 404 : 200,
//             { 'Content-Type': contentType }
//         );
//         response.end(
//             contentType === 'application/json' ? JSON.stringify(data) : data
//         );
//     } catch (err) {
//         console.log(err);
//         myEmitter.emit('log', `${err.name}: ${err.message}`, 'errLog.txt');
//         response.statusCode = 500;
//         response.end();
//     }
// }

// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method);
//     myEmitter.emit('log', `${req.url}\t${req.method}`, 'reqLog.txt');

//     const extension = path.extname(req.url);

//     let contentType;

//     switch (extension) {
//         case '.css':
//             contentType = 'text/css';
//             break;
//         case '.js':
//             contentType = 'text/javascript';
//             break;
//         case '.json':
//             contentType = 'application/json';
//             break;
//         case '.jpg':
//             contentType = 'image/jpeg';
//             break;
//         case '.png':
//             contentType = 'image/png';
//             break;
//         case '.txt':
//             contentType = 'text/plain';
//             break;
//         default:
//             contentType = 'text/html';
//     }

//     let filePath =
//         contentType === 'text/html' && req.url === '/'
//             ? path.join(__dirname, 'views', 'index.html')
//             : contentType === 'text/html' && req.url.slice(-1) === '/'
//                 ? path.join(__dirname, 'views', req.url, 'index.html')
//                 : contentType === 'text/html'
//                     ? path.join(__dirname, 'views', req.url)
//                     : path.join(__dirname, req.url);

//     // makes .html extension not required in the browser
//     if (!extension && req.url.slice(-1) !== '/') filePath += '.html';

//     const fileExists = fs.existsSync(filePath);

//     if (fileExists) {
//         serveFile(filePath, contentType, res);
//     } else {
//         switch (path.parse(filePath).base) {
//             case 'old-page.html':
//                 res.writeHead(301, { 'Location': '/new-page.html' });
//                 res.end();
//                 break;
//             case 'www-page.html':
//                 res.writeHead(301, { 'Location': '/' });
//                 res.end();
//                 break;
//             default:
//                 serveFile(path.join(__dirname, 'views', '404.html'), 'text/html', res);
//         }
//     }
// });
// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// const { error } = require('console')
const express = require('express')
const app = express()
const path = require('path')
const { logger } = require('./middleware/logEvents')
const cors=require('cors')
const coroperations = require('./config/coroperations')
const errorhandler = require('./middleware/errorhandler')

const PORT= process.env.PORT||400
app.use(logger)
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/',express.static(path.join(__dirname,'./public')))
app.use('/subdir',express.static(path.join(__dirname,'./public')))
app.use('/register',require('./routes/register'))
app.use('/auth',require('./routes/auth'))

app.use(cors(coroperations))
app.use('/subdirectory',require('./routes/subdir'))
app.use('/',require('./routes/root'))
// app.use('/employees',require('./routes/api/employees'))
// app.get('/*',(req,res)=>{
//     res.status(404).sendFile(path.join(__dirname,'views','404.html'))
// })


const one=(req,res,next)=>{
    console.log("one") 
    next()
}
const two =(req,res,next)=>{
    console.log("two")
    next()
}
const three = (req,res)=>{
    console.log("three")
    res.send("Finished!")
}
app.get('/chain(.html)?',[one,two,three])

app.get('/hello(.html)?',(req,res,next)=>{
    console.log("try to load")
    next()
}, (req,res)=>{
    res.send("hello")
})
app.all('*',(req,res)=>{
    res.status(404);
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname,'views','404.html'));
    }else if(req.accepts('json')){
        res.json({"error":"404 not found"});
    }else{
        res.type('txt').send('404 not found')
    }
})
app.use(errorhandler)
app.listen(PORT,(error)=>{
    if(error){
        console.log(error)
    }else{
        console.log("server is running on http://localhost:"+PORT)
    }
})


