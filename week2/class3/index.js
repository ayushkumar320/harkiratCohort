// Real world example of HTTP and express:
// Suppose we have a function and we need to export it so that anyone can use it, we can deploy it to our HTTP server as follows

const express = require("express");
const app = express();

// Suppose we have a function which calculates sum

function calculateSum(n){
  let sum = 0;
  for(let i = 0; i<=n; i++){
    sum += i;
  }
  return sum;
}

app.get('/', function(req, res){
  const n = req.query.n; // Get the value of n from the query parameters
  const sum = calculateSum(n);
  res.send(`The sum of numbers from 0 to ${n} is ${sum}`);
});

// Example of query - http://localhost:3000/?n=10 here n = 10

app.listen(3000, function(){
  console.log("Server is running on port 3000");
});