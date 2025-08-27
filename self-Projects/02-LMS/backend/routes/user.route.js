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
    const existingUser = await User.findOne({
      username: username,
    });

    if (existingUser) {
      return res.status(409).json({
        message: "User already exists",
        username: username,
      });
    }

    const user = await User.create({
      username: username,
      password: password,
    });

    res.status(201).json({
      message: "User created successfully",
      userId: user._id,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});

router.post("/signin", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const user = await User.findOne({username});
    if (!user) {
      return res.status(404).json({message: "User not found"});
    }

    if (user.password !== password) {
      return res.status(401).json({message: "Invalid credentials"});
    }

    const token = jwt.sign({id: user._id}, secret, {expiresIn: "24h"});
    res.status(200).json({
      message: "User signed in successfully",
      token: token,
      user: {
        id: user._id,
        username: user.username,
        isPaid: user.isPaid,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});

// Get all courses - available to all users
router.get("/courses", async function (req, res) {
  try {
    const courses = await Course.find({});
    res.json({
      message: "Courses retrieved successfully",
      courses: courses,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});

// Enroll in a course - requires authentication
router.post(
  "/courses/:courseId/enroll",
  userMiddleware,
  async function (req, res) {
    try {
      const courseId = req.params.courseId;
      const userId = req.user._id;

      // Check if course exists
      const course = await Course.findById(courseId);
      if (!course) {
        return res.status(404).json({
          message: "Course not found",
        });
      }

      // Check if user is already enrolled
      const user = await User.findById(userId);
      if (user.enrolledIn.includes(courseId)) {
        return res.status(409).json({
          message: "Already enrolled in this course",
        });
      }

      // Enroll user in the course
      await User.findByIdAndUpdate(userId, {
        $push: {enrolledIn: courseId},
      });

      res.json({
        message: "Successfully enrolled in course",
        course: {
          id: course._id,
          title: course.title,
          description: course.description,
        },
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
        error: error.message,
      });
    }
  }
);

// Get user's enrolled courses
router.get("/enrolled-courses", userMiddleware, async function (req, res) {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId).populate("enrolledIn");

    res.json({
      message: "Enrolled courses retrieved successfully",
      enrolledCourses: user.enrolledIn,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});

// Get user profile
router.get("/profile", userMiddleware, async function (req, res) {
  try {
    const user = await User.findById(req.user._id).populate("enrolledIn");

    res.json({
      message: "Profile retrieved successfully",
      user: {
        id: user._id,
        username: user.username,
        isPaid: user.isPaid,
        enrolledCourses: user.enrolledIn.length,
        courses: user.enrolledIn,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});

export default router;
