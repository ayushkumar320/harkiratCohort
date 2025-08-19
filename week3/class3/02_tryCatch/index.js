// Try - Catch block is used to handle errors in a more manageable way
/*
try {
  // Code that may throw an error
} catch (error) {
  // Handle the error
}
*/

// Basic example

let a;
// console.log(a.length);  // This will throw an error as a is not defined so hello world wont be printed
// To overcome this, we can handle errors in a much better way

try {
  console.log(a.length); // This will try to execute, if it throws error, it is handled in catch block
} catch (error) {
  console.log("Error : " + error.message);  // This will catch the error and print it
}

// Now this hello world will be printed!
console.log("hello world");