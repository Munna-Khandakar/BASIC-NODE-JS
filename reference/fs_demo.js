/*
 * Title: Node JS file system
 * Description: some useful file system modules
 * Author: Munna Khandakar (learnt from 'Traversy Media')
 * N.B: uncomment the sections one by one else it may misbehave
 * Date: 17/05/2020
 *
 */

const fs = require("fs");
const path = require("path");

// // create folder
// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) throw err;
//   console.log("Folder created...");
// });

// // create and write file
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "Hello World",
//   (err) => {
//     if (err) throw err;
//     console.log("File created...");
//     appendFile("I love Node.js...");
//   }
// );

// // append file
// const appendFile = (text) => {
//   fs.appendFile(path.join(__dirname, "/test", "hello.txt"), text, (err) => {
//     if (err) throw err;
//     console.log("File appended...");
//   });
// };

// // read file
// fs.readFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "utf-8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

// // rename file
// fs.rename(
//   path.join(__dirname, "/test", "hello.txt"),
//   path.join(__dirname, "/test", "welcome.txt"),
//   (err) => {
//     if (err) throw err;
//     console.log("File renamed....");
//   }
// );
