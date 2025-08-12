// We will read a file using the fs (filesystem) module in Node.js
const fs = require("fs"); // This line imports the fs module which provides file system related functionalities

// Note - Here we are passing a function without name, it is called anonymous function.

// fs.readFile() is an async function!

fs.readFile("a.txt", "utf-8", function (err, data) {  
  console.log(data); // This will print the content of a.txt file
});

console.log("Hello world!");   // This run first as it is not waiting for the file read to complete

// Behind the scene of async functions:
/*
Suppose there are 2 function, one which prints hello world, and other which counts from 1 to 100 and the first print function is called under a setTimeout with 10 seconds delay.

setTimeout(function(){
  console.log("Hello from async function");
}, 10000);

for (let i = 1; i <= 100; i++) {
  console.log(i);
}

How program gets executed?

The controller comes to setTimeout() and takes it to the Web APIs call block where it waits for 10 seconds. Meanwhile the loop gets start executing, suppose the loop takes 13 seconds so after 10 second total time, the setTimeout moves from web api block to callback queue, and after 3 second when the loop gets completed, the event loop picks the setTimeout callback from the queue and executes it.

NOTE - as the thread is busy after 10 seconds, the setTimeout function will only be executed after the loop completes.

Also, in the case of multiple asynchronous operations, they will be executed in the order they were added to the callback queue, after the current execution stack is cleared.

Then event loop will pick the next task from the callback queue and execute it in call stack!.

*/
