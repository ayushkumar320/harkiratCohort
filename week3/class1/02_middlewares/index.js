// Better way for authentication using middleware
import express from "express";
const app = express();

let numberOfRequest = 0;
function calculateRequest(req, res, next){
  numberOfRequest++;
  console.log(`Number of requests: ${numberOfRequest}`);
  next();
}

// Last thing in middleware
// app.use() - app.use() is used to mount middleware functions at a specific path so it mounts the middleware for all routes declared below this call. We should only send middleware in app.use()

app.use(express.json()); // To parse JSON bodies
app.use(calculateRequest); // This will run for every request


function userMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  if (username != "harkirat" && password != "pass") {
    res.status(403).json({
      msg: "Incorrect inputs",
    });
  } else {
    next();
  }
}

function kidneyMiddleware(req, res, next) {
  const kidneyId = req.query.kidneyId;
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(403).json({
      msg: "Incorrect inputs",
    });
  } else {
    next();
  }
}


// First userMiddleware is checked then kidneyMiddleware
app.get("/health-checkup", userMiddleware, kidneyMiddleware, function (req, res) {
  // do something with kidney here
  res.send("Your heart is healthy");
});

app.get("/kidney-check", userMiddleware, kidneyMiddleware, function (req, res) {
  // do something with kidney here
  res.send("Your heart is healthy");
});

app.get("/heart-check", userMiddleware, function (req, res) {
  // do something with User here
  res.send("Your heart is healthy");
});

app.listen(3000, function () {
  console.log(`Server is running on http://localhost:${3000}`);
});