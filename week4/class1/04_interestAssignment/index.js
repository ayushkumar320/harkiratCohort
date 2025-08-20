import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/interest", (req, res) => {
  const principal = parseFloat(req.query.principal);
  const rate = parseFloat(req.query.rate);
  const time = parseFloat(req.query.time);
  const interest = (principal * rate * time) / 100;
  const total = principal + interest;
  res.send(`The interest amount is ${interest} and total amount is ${total}`);
});

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
