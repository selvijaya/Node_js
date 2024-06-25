const fs = require("fs")
const rs = fs.createReadStream('./fileSystem/lorem.txt',{encoding:'Utf8'})  
const ws = fs.createWriteStream('./filesystem/new_lorem.txt')
// rs.on('data',(datachunk)=>{
//     ws.write(datachunk)
// })
  //or
rs.pipe(ws)