import express from 'express';
const app = express();

// So till now, in express we have only seen this

/*
app.get('/', function(req, res){
  res.send("Hello world!");
});
*/

// But there is more to Express than just this.
// 1. We can have multiple callbacks in Express

// app.get("/", cb1, cb2, cb3);

// 2. We have a next parameter in the callback function which is used to call the next middleware in the stack

// app.get("/", function(req, res, next){
//   next();
// });

// The next parameter is a function that, when called, will pass control to the next middleware function in the stack.
// These middlewares are responsible for handling requests and responses in a modular way and do some checks

// Basic structure when we will use our own middlewares...
app.get("/health-checkup", function(req, res, next){
  console.log("hi from req1");
  next();
}, function(req, res, next){
  console.log("hi from req2");
  next();
}, function(req, res){
  res.send("Health checkup successful!");
});


app.listen(3000, function(){
  console.log(`Server is running on http://localhost:${3000}`);
});