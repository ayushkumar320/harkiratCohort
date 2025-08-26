import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGODB_URI);

const AdminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  isPaid: {type: Boolean, default: false},
  enrolledIn: [{type: mongoose.Schema.Types.ObjectId, ref: "Course"}],
});

const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  duration: Number,
  price: Number,
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

export { Admin, User, Course };