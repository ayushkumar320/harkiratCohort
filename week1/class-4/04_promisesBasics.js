// Cleaner way than previous code file!

// The motive to introduce promises is to avoid callback hell and make asynchronous code more manageable.


// Below is a cleaner way using promises
const fs = require('fs');

// my own asynchronous function
function kiratsReadFile() {
  
  console.log("Inside kirat's read file");
  
  return new Promise(function(resolve) {
    
    console.log("Inside promise!");
    
    fs.readFile("a.txt", "utf-8", function(err, data) {
      
      console.log("Before resolve!");

      resolve(data);     // Resolve is used to send the data further to the next .then() block, and we can access the data sent in the onDone function with the help of the parameter.
    });
  })
}

// callback function to call
function onDone(data) {
  console.log(data)
}

// Here the promise sends the data to the onDone function with the help of .then(), so it avoids callback hell.

// Gets the promise synchronously but data of promise comes asynchronously

kiratsReadFile().then(onDone);
