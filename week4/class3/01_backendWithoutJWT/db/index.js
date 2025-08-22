import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGODB_URI);

// Schemas
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  issuedBooks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
});

const AdminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  description: String,
  isAvailable: {type: Boolean, default: true},
  // Track which user has the book
  issuedTo: {type: mongoose.Schema.Types.ObjectId, ref: "User", default: null},
});

const User = mongoose.model("User", UserSchema);
const Admin = mongoose.model("Admin", AdminSchema);
const Book = mongoose.model("Book", BookSchema);

export {User, Admin, Book};
