const express = require('express');

const app = express();

app.use(express.json()); 

app.post('/health-checkup', function(req, res){

  const kidneys = req.body.kidneys;  // Exception will be thrown and will be catched by the global error handler

  res.send("you have " + kidneys.length + " kidneys");
});


// Global catches / Error Middlewares
// This is a global error handler that catches errors in the application
// These are defined after all routes
// Here function looks like function(err, req, res, next), err is the error object and is called when an error occurs, it has 4 instead of 3 arguments compared to normal middleware
app.use(function(err, req, res, next) {
  res.status(500).json({
    msg: "Sorry something is wrong with the inputs!"
  });
});

app.listen(3000, function() {
  console.log('Server is running on http://localhost:3000');
});