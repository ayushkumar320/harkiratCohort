// Basic HTTP server using express!

import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.send("Hello world!");
});

app.get('/about', function(req, res){
  res.send("About this website");
});

// Understanding the syntax
app.get("/route-handler", function(req, res){
  // req - used to access headers, body, query parameters
  console.log(req.headers);
  console.log(req.body);
  console.log(req.query);
  
  // res - used to send a response back to the client
  res.json({
    name: "Ayush",
    age: 19,
    favLanguage: "JavaScript",
  })
});

// POST method
app.post('/conversations', (req, res) => {
  console.log(req.headers);
  res.send({
    msg: "2 + 2 = 4"
  })
})

// Accessing the body - we can use this by body parser
app.post('/body-parser', (req, res) => {
  console.log(req.body);
  res.send({
    msg: "Received your data",
    data: req.body
  });
});

// Another example, Machine Learning Output
app.post('/backend-api/conversation', (req, res) => {
  const message = req.body.message;
  console.log(message);
  // Machine Learning processes the message and sends back output
  res.json({
    input: message,
    output: "This is a response from the ML model"
  });
});

app.listen(port, function(){
  console.log(`Server is running on http://localhost:${port}`);
});

