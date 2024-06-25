// console.log(global)
const path = require('path')
const os = require('os')


console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)
console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))
console.log(path.parse(__filename))

const math = require('./math')
console.log(math.add(4,4))
console.log(math.sub(6,2))
console.log(math.mul(3,4))
console.log(math.div(6,2))
// const {add,sub,mul,div} = require('./math')
// console.log(add(4,4))
// console.log(sub(6,2))
// console.log(mul(3,4))
// console.log(div(6,2)0


// Normal file system function


// const fs = require('fs')
// fs.readFile('./fileSystem/file.txt','utf-8',(err,data)=>{
//     if(err) throw err;
//     console.log(data)
// })

//vennila javascript


// process.on('unCaughtError',(err)=>{
//     console.error(`this is uncaught error:${err}`)
//     process.exit(1)
// })
// fs.writeFile(path.join(__dirname,'./fileSystem/newFile.txt'),'hii! how are you?',(err)=>{
//     if(err)throw err;
//     console.log('write completed')
//     fs.appendFile(path.join(__dirname,'./fileSystem/newFile.txt'),'i am fine',(err)=>{
//         if (err) throw err;
//         console.log("Append succesfully")
//         fs.rename(path.join(__dirname,'./fileSystem/newFile.txt'),path.join(__dirname,'./fileSystem/original.txt'),(err)=>{
//             if (err) throw err;
//             console.log('rename successfuly')
//         })
//     })
// })



// call back function


// const fspromises = require('fs').promises
// const fileops = async()=>{
//     try{
//         const data = await fspromises.readFile(path.join(__dirname,'fileSystem','original.txt'),'utf8')
//         console.log(data)
//         await fspromises.writeFile(path.join(__dirname,'fileSystem','new.txt'),'what are you doing?')
//         console.log("written")
//         await fspromises.appendFile(path.join(__dirname,'fileSystem','new.txt'),'now i am studying in Nodejs')
//         console.log("appended")
//         await fspromises.rename(path.join(__dirname,'fileSystem','files.txt'),path.join(__dirname,'fileSystem','files.txt'))
//         console.log("rename successfully")
//         await fspromises.unlink(path.join(__dirname,'fileSystem','new.txt'))
//     }catch(err){
//         console.error(err)
//     }
// }
// fileops()

