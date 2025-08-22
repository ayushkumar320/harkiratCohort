// A server which sends random todo tasks with title and description

import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// In-memory list of todos (could be moved to DB later)
const todos = [
  {id: 1, title: "Gym", description: "Workout for 45 minutes"},
  {id: 2, title: "Study", description: "Complete 2 chapters of JavaScript"},
  {id: 3, title: "Read", description: "Read 20 pages of a book"},
  {id: 4, title: "Meditate", description: "10 minutes mindfulness session"},
  {id: 5, title: "Walk", description: "Evening walk for 30 minutes"},
];

app.get("/todos", (req, res) => {
  // Pick a random todo each request
  const random = todos[Math.floor(Math.random() * todos.length)];
  res.json(random);
});

app.get("/", (req, res) => {
  res.send("Todo API running. Hit /todos for a random todo.");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
