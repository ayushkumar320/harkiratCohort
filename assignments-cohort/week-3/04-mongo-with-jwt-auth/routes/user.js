const {Router} = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User, Course} = require("../db");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");

// User Routes
router.post("/signup", async (req, res) => {
  const {username, password} = req.body;
  await User.create({username, password});
  res.json({message: "User created successfully"});
});

router.post("/signin", async (req, res) => {
  const {username, password} = req.body;
  const user = await User.findOne({username, password});
  if (!user) return res.status(401).json({message: "Invalid credentials"});
  const token = jwt.sign({username}, JWT_SECRET);
  res.json({token});
});

router.get("/courses", async (req, res) => {
  const courses = await Course.find({});
  res.json({courses});
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  const courseId = req.params.courseId;
  const username =
    req.user?.username || req.body.username || req.query.username || null;
  // Fallback: decode token again to get username if middleware didn't attach
  if (!username)
    return res.status(400).json({message: "Username context missing"});
  const course = await Course.findById(courseId);
  if (!course) return res.status(404).json({message: "Course not found"});
  await User.updateOne({username}, {$addToSet: {purchasedCourses: course._id}});
  res.json({message: "Course purchased successfully"});
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  const authHeader = req.headers.authorization || "";
  const token = authHeader.split(" ")[1];
  let decoded;
  try {
    decoded = jwt.verify(token, JWT_SECRET);
  } catch {
    return res.status(401).json({message: "Invalid token"});
  }
  const user = await User.findOne({username: decoded.username}).populate(
    "purchasedCourses"
  );
  if (!user) return res.status(404).json({message: "User not found"});
  res.json({purchasedCourses: user.purchasedCourses || []});
});

module.exports = router;
