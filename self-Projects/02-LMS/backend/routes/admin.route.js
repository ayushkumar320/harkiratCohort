import {Router} from "express";
import jwt from "jsonwebtoken";
import {Admin, User, Course} from "../db/index.js";
import dotenv from "dotenv";
import adminMiddleware from "../middlewares/admin.middleware.js";
import userMiddleware from "../middlewares/user.middleware.js";
dotenv.config();

const secret = process.env.JWT_SECRET;

const router = Router();

// Routes

router.post("/signup", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const admin = await Admin.findOne({
      username: username,
    });

    if (admin) {
      res.status(409).json({
        message: "Admin already exists",
        username: username,
      });
    } else {
      await Admin.create({
        username: username,
        password: password,
      });
      res.status(201).json({
        message: "Admin created successfully",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

router.post("/signin", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const admin = await Admin.findOne({
      username: username,
    });

    if (admin && admin.password === password) {
      const token = jwt.sign({username: admin.username}, secret);
      res.json({
        message: "Admin signed in successfully",
        token: token,
      });
    } else {
      res.status(401).json({
        message: "Invalid credentials",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

router.post("/courses", adminMiddleware, async function (req, res) {
  const {title, description, instructor, duration} = req.body;
  const course = await Course.create({
    title,
    description,
    instructor,
    duration,
  });
  res.json({
    message: "Course created successfully",
    course,
  });
});

export default router;
