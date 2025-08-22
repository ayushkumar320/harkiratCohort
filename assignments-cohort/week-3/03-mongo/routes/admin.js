const express = require("express");
const adminMiddleware = require("../middleware/admin");
const router = express.Router();
const mongoose = require("mongoose");
const Admin = require("../db").Admin; 
const User = require("../db").User; 
const Course = require("../db").Course; 
// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement signup logic
  const username = req.body.username;
  const password = req.body.password;

  // check if a user with this username already exists or not
  await Admin.create({
    username: username,
    password: password
  });
  res.json({
    message: "Admin created successfully!"
  });

});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const imageLink = req.body.imageLink;
  const price = req.body.price;

  const newCourse = await Course.create({
    title,
    description,
    imageLink,
    price
  });
  res.json({
    message: "Course created successfully ", courseId: newCourse._id
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  
  // Inside find, send empty object to view all
  const allCourses = await Course.find({});
  
  // We can send condition inside find  
  const filteredCourses = await Course.find({
    price: 1999
  });
  res.json({courses: allCourses, filteredCourses: filteredCourses});
});

module.exports = router;
