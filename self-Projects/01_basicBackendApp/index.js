import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import zod from "zod";
dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI + "projectOne";

const app = express();

// Middleware
app.use(express.json());

// Zod schema
const signupSchema = zod.object({
  username: zod.string().min(2).max(100),
  email: zod.string().email(),
  password: zod.string().min(6).max(100),
});

const signinSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(6).max(100),
});

// Mongoose database connection
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(function () {
    console.log("Connected to MongoDB");
  })
  .catch(function (err) {
    console.log("Error connecting to the mongoDB server");
  });

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
  })
);

// Routes
app.post("/signup", function (req, res) {
  const {username, email, password} = req.body;
  const result = signupSchema.safeParse(req.body);
  if (!result.success) {
    res
      .json({
        msg: "Invalid input",
      })
      .status(400);
  } else {
    // Checking whether user already exists in database before adding the new user.
    (async function checkUser() {
      const existingUser = await User.findOne({email: email});
      if (existingUser) {
        res.status(400).json({
          msg: "User already exists",
          email: email,
        });
      }
    })();
    // If user does not exists
    const user = new User({
      username: username,
      email: email,
      password: password,
    });
    user.save();
    res.json({
      msg: "User created successfully",
      user: user,
    });
  }
});

// Signing in with the credentials
app.post("/signin", function (req, res) {
  const {email, password} = req.body;
  if (!email || !password) {
    return res.status(400).json({msg: "Email and password are required"});
  }
  const result = signinSchema.safeParse(req.body);
  if (!result.success) {
    res
      .json({
        msg: "Invalid input",
      })
      .status(400);
  } else {
    // Checking if user exists in the database
    (async function checkUser() {
      const existingUser = await User.findOne({email: email});
      if (!existingUser) {
        return res.status(400).json({msg: "User not found"});
      }
      if (existingUser.password !== password) {
        return res.status(400).json({msg: "Invalid password"});
      }
      const token = jwt.sign({id: existingUser._id}, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      console.log(token);
      res.json({msg: "Signin successful", token: token});
    })();
  }
});

// Using JWT generated token to verify and display the nemail address

app.get("/profile", function (req, res) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({msg: "Unauthorized"});
  }
  jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
    if (err) {
      return res.status(401).json({msg: "Invalid token"});
    }
    User.findById(decoded.id)
      .then((user) => {
        if (!user) {
          return res.status(404).json({msg: "User not found"});
        }
        res.json({
          msg: "Profile fetched successfully",
          user: user,
        });
      })
      .catch((err) => {
        return res.status(500).json({msg: "Error fetching user"});
      });
  });
});

// Listening to port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
