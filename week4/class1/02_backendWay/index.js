// Backend of our server

import express from "express";

// Cors - Cross-Origin Resource Sharing, it is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. In simple words, it is a way to allow your web application to make requests to a different domain.
import cors from "cors";   

const app = express();

app.use(cors()); 

app.get("/sum", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.status(200).send(`The sum of ${a} and ${b} is ${a + b}`);
});

app.get("/interest", (req, res) => {
  const principal = parseFloat(req.query.principal);
  const rate = parseFloat(req.query.rate);
  const time = parseFloat(req.query.time);
  const interest = (principal * rate * time) / 100;
  const total = principal + interest;
  res.status(200).json({
    total: total,
    interest: interest
  });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});