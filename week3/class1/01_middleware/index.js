const express = require("express");
const app = express();

app.get("/health-checkup", function (req, res) {
  // We can provide input for header via Postman
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;

  // Basic authentication
  if (!(username === "harkirat" && password === "pass")) {
    // do something with the kidney
    res.status(400).json({
      msg: "Invalid credentials or kidney ID",
    });
    return;
  }

  if (kidneyId != 1 || kidneyId != 2) {
    res.status(400).json({
      msg: "Invalid credentials or kidney ID",
    });
    return;
  }
  res.json({
    msg: "Your kidney is fine!",
  });
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});