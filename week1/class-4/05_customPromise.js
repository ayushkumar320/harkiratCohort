// Here we will create a custom promise

// Promises can have 3 states
// 1. Pending - Initial state, neither fulfilled nor rejected.
// 2. Fulfilled - Meaning that the operation completed successfully.
// 3. Rejected - Meaning that the operation failed.

const myPromise = new Promise(function(resolve){
  resolve("foo");
});

function callback(){
  console.log(myPromise);
}

// .then() is used to handle the fulfilled value
// Inside .then(callback) we use callback to access the fulfilled value
myPromise.then(callback);

// OR

myPromise.then(function(){
  console.log(myPromise);
});

// Some docs:
/*

What even is a promise? 
- It is just a class that makes callbacks and async functions slightly more readable
- When we create it, we need to pass in a function as the first argument which has resolve as First argument
- Inside resolve: It is a place for the writer of the async function to do thier magic (get ketchup, do DB calls) and call resolve at the end with the data using .then(callback)
*/

// Dummy async function that almost immediately resolves

function kiratsAsyncFunction(){
  let p = new Promise(function(resolve){
    resolve("hello from promise!");
  });
  return p;
}

const value = kiratsAsyncFunction();
value.then(function(data){
  console.log(data);
});