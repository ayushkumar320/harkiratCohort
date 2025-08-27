const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());


const todos = [
  {
    id: 1,
    title: "Go to gym",
    completed: false
  },
  {
    id: 2,
    title: "Read a book",
    completed: false
  },
  {
    id: 3,  
    title: "Learn React",
    completed: false
  },
  {
    id: 4,
    title: "Build a Todo App",
    completed: false
  }
];

const randomTodo = todos[Math.floor(Math.random() * todos.length)];

app.get("/", (req, res) => {
  res.json(todos);
});

app.get("/random", (req, res) => {
  res.json(randomTodo);
});

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});