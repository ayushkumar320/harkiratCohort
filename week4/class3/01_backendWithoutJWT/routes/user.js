import express from "express";
import {User, Book} from "../db/index.js";
import userMiddleware from "../middlewares/user.js";

const router = express.Router();

router.post("/signup", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const user = await User.create({
    username: username,
    password: password,
  });
  if (user) {
    res.json({
      msg: "User created successfully!",
      username: username,
    });
  }
});

router.post("/signin", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const user = await User.findOne({
    username: username,
    password: password,
  });
  if (user) {
    res.json({
      msg: "User signed in successfully!",
      username: username,
    });
  } else {
    res.json({
      msg: "Invalid credentials!",
    });
  }
});

router.get("/books", userMiddleware, async function (req, res) {
  const books = await Book.find({
    isAvailable: true,
  });
  res.json(books);
});

router.post("/books/issue", userMiddleware, async function (req, res) {
  const bookId = req.body.bookId;
  const userId = req.user._id;
  const book = await Book.findById(bookId);
  if (book && book.isAvailable) {
    book.issuedTo = userId;
    book.isAvailable = false;
    await book.save();
    // Also push into user's issuedBooks array for reference
    if (!req.user.issuedBooks) req.user.issuedBooks = [];
    req.user.issuedBooks.push(book._id);
    await req.user.save();
    res.json({
      msg: "Book issued successfully!",
      bookId: bookId,
    });
  } else {
    res.json({
      msg: "Book is not available!",
    });
  }
});

router.get("/books/issued", userMiddleware, async function (req, res) {
  const userId = req.user._id;
  const books = await Book.find({
    issuedTo: userId,
  });
  res.json(books);
});

export default router;
