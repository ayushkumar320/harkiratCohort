// Doing the full fledged way
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const dbURI = process.env.MONGODB_URI + "user_app";

mongoose.connect(dbURI);

const User = mongoose.model("User", {
  username: String,
  email: String,
  password: String,
});

app.post("/signup", function(req, res){
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  // IIFE to check user existence (IIFE stands for Immediately Invoked Function Expression)
  (async function checkUser() {
    const existingUser = await User.findOne({email: email});
    if (existingUser) {
      return res.status(400).send("User already exists");
    } else {
      const user = new User({
        username: username,
        email: email,
        password: password,
      });

      user.save().then(() => {
        res.status(201).send("User created successfully");
      }).catch((error) => {
        console.error("Error saving user:", error);
        res.status(500).send("Error creating user");
      });
    }
  })();
});

app.listen(3000, function(){
  console.log("Server is running on http://localhost:3000");
});