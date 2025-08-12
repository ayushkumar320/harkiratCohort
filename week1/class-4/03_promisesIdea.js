// Promises - A Promise is a JavaScript object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// Basic promise code:

function findSum(n){
  let ans = 0;
  for(let i = 0; i < n; i++){
    ans += i;
  }
  return ans;
}

function findSumTill100(){
  return findSum(100);
}

setTimeout(findSumTill100, 1000);
console.log("hello world!");

// Promises are syntactical sugar that makes this code slightly more readable, it will still use the callback mechanism under the hood.

// We can create our own async function by adding a wrapper on top of another async function like below

const fs = require('fs');

// my own asynchronous function: wrapper on top of a async fs.readFile function

function kiratsReadFile(cb) {
  fs.readFile("a.txt", "utf-8", function(err, data) {
    cb(data);
  });
}

function onDone(data) {
  console.log(data)
}

kiratsReadFile(onDone)

// Usually, all async functions that we will write will be on top of JS provided async function like setTimeout() or fs.readFile();