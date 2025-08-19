require("dotenv").config();

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI + "user_app");

const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String,
});

const user = new User({
  name: "Ayush",
  email: "ayush@gmail.com",
  password: "1234",
});

// Saving data in database
user.save().then(() => {
  console.log("User saved successfully");
}).catch((error) => {
  console.error("Error saving user:", error);
});
