// const {format:app} = require("date-fns")
// console.log(app(new Date(),'yyyymmdd\thh:mm:ss'))
// const {v4:uuidv4} = require("uuid")
// console.log(uuidv4())
// const logEvents = require('./logEvents')
// const path = require('path')
// const EventEmitter = require('events')
// class Emitter extends EventEmitter{}
// const MyEmitter = new Emitter()
// MyEmitter.on('log',(msg)=>logEvents(msg))  // The 'log' string is being used as an event identifier
// setTimeout(()=>{
//     MyEmitter.emit('log','log Event is Emitted')})

// const fs = require('fs');
// // const path=require('path');

// // Path to the file you want to create
// const filePath = 'example2.txt';

// // Content you want to write to the file
// const fileContent = 'Hello, world!';
// app.get(' hi how are you')

// // Write content to the file
// fs.writeFile(filePath, fileContent, (err) => {
//   if (err) {
//     console.error('Error creating file:', err);
//     return;
//   }
//   console.log('File created successfully!');
// });



// const fs = require('fs');

// // Path to the file you want to append to
// const filePath = 'example.txt';

// // Content you want to append to the file
// const add = '\nThis is addit content.';

// // Append content to the file
// fs.renameFile(filePath, example.txt,george.txt (err) => {
//   if (err) {
//     console.error('Error appending to file:', err);
//     return;
//   }
//   console.log('Content appended to file successfully!');
// });


// const fs = require('fs');

// // Path to the existing file
// const oldFilePath = 'new_file.txt';

// // New path for the file (rename)
// const newFilePath = 'new_file2.txt';

// // Rename the file
// fs.rename(oldFilePath, newFilePath, (err) => {
//   if (err) {
//     console.error('Error renaming file:', err);
//     return;
//   }
// //   console.log('File renamed successfully!');
// // });


// const fs = require('fs').promises;


// // Path to the existing file
// const oldFilePath = 'new_file2.txt';
// const fileContent = 'Hello, world!';

// // New path for the file (rename)
// const newFilePath = 'new_file3.txt';


// async function renameFile(oldFilePath, newFilePath) {
//   try {
//     await fs.rename(oldFilePath, newFilePath);
//     console.log('File renamed successfully!');



//   } catch (err) {
//     console.error('Error renaming file:', err);
//   }
// }

// // Example usage
// renameFile('old_file.txt', 'new_file.txt');


const fs = require('fs').promises;

async function fileOperations() {
  try {
     // Write to file
     await fs.writeFile('example.txt', 'This is new content.\n');
     console.log('Content written to file successfully!');

     
    // Read from file
    const content = await fs.readFile('example.txt', 'utf8');
    console.log('File content:', content);


    // Append to file
    await fs.appendFile('example.txt', 'This is some additional content.\n');
    console.log('Content appended to file successfully!');


   

    // Rename file
    await fs.rename('example.txt', 'renamed_file.txt');
    console.log('File renamed successfully!');
  } catch (err) {
    console.error('Error:', err);
  }
}

// Call the function
fileOperations();


