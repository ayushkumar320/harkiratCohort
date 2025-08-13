// Basic HTTP server using express!

import express from "express";

const app = express();
const port = 3000;

app.get('/', function(req, res){
  res.send("Hello world!");
});

app.get('/about', function(req, res){
  res.send("About this website");
});

app.listen(port, function(){
  console.log(`Server is running on http://localhost:${port}`);
});