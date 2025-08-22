import express from "express";
import {Admin, Book} from "../db/index.js";
import adminMiddleware from "../middlewares/admin.js";
const router = express.Router();

// Admin Routes
router.post("/signup", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const admin = new Admin({
    username: username,
    password: password,
  });
  const result = await admin.save();
  if (result) {
    res.json({
      msg: "Admin created successfully!",
    });
  } else {
    res.json({
      msg: "Error creating admin!",
    });
  }
});

router.post("/signin", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const admin = await Admin.findOne({
    username: username,
    password: password
  });
  if (admin) {
    res.json({
      msg: "Admin signed in successfully!",
    });
  } else {
    res.json({
      msg: "Invalid credentials!",
    });
  }
});

router.post("/books", adminMiddleware, async function(req, res) {
  const {title, author, description, isAvailable} = req.body;
  const book = new Book({
    title: title,
    author: author,
    description: description,
    isAvailable: isAvailable
  });
  const result = await book.save();
  if (result) {
    res.json({
      msg: "Book created successfully!",
      bookTitle: title
    });
  } else {
    res.json({
      msg: "Error creating book!",
    });
  }
});

router.delete("/books/:id", adminMiddleware, async function(req, res) {
  const bookId = req.params.id;
  const result = await Book.findByIdAndDelete(bookId);
  if (result) {
    res.json({
      msg: "Book deleted successfully!",
      bookId: bookId
    });
  } else {
    res.json({
      msg: "Error deleting book!",
    });
  }
});

router.get("/books", adminMiddleware, async function(req, res) {
  const books = await Book.find();
  res.json(books);
});

router.put("/books/:id", adminMiddleware, async function(req, res) {
  const bookId = req.params.id;
  const {title, author, description, isAvailable} = req.body;
  const result = await Book.findByIdAndUpdate(bookId, {
    title: title,
    author: author,
    description: description,
    isAvailable: isAvailable
  });
  if (result) {
    res.json({
      msg: "Book updated successfully!",
      bookId: bookId
    });
  } else {
    res.json({
      msg: "Error updating book!",
    });
  }
});

export default router;