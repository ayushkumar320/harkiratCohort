// We will read a file using the fs (filesystem) module in Node.js
const fs = require("fs"); // This line imports the fs module which provides file system related functionalities

// Note - Here we are passing a function without name, it is called anonymous function.

// fs.readFile() is an async function!

fs.readFile("a.txt", "utf-8", function (err, data) {  
  console.log(data); // This will print the content of a.txt file
});

console.log("Hello world!");   // This run first as it is not waiting for the file read to complete
