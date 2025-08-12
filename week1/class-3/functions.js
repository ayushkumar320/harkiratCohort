// Functions are reusable blocks of code that perform a specific task.

// We need functions to avoid code repetition and make our code more modular.

// Fundamental Principle of Coding - DRY which stands for Dont Repeat Yourself, functions helps us in reducing code duplication.

function sum(a, b){
  return a + b;
}

// Arrow function - These does not have access to "this" keyword
const add = (a, b) => {
  return a + b;
}

console.log(sum(5, 10));
console.log(add(5, 10));


// Callback functions - Calling a function inside another function
function greet(name, callback){
  console.log("Hello " + name);
  callback();
}

function sayGoodbye(){
  console.log("Goodbye!");
}

greet("Alice", sayGoodbye);

// Another example of callback

function square(n){
  return n**2;
}

function cube(n){
  return n**3;
}

function calculate(n, callback){
  return callback(n);
}

function sumOfSomething(a, b, callback){
  const val1 = callback(a);
  const val2 = callback(b);
  return val1 + val2;
}

const ans = sumOfSomething(2, 3, function(n){
  return n**3;
});
console.log(ans);

console.log("Square of 5 is " + calculate(5, square));
console.log("Cube of 5 is " + calculate(5, cube));