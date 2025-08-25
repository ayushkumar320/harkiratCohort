import express from "express";
import cors from "cors";
import schemas from "./types.js";
import todo from "./db.js";

const {createTodoSchema, updateTodoSchema} = schemas;
const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.get("/todos", async (req, res) => {
  // We await as we want to get the todos from the database and it may take time
  const todos = await todo.find({});
  res.json(todos);
});

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodoSchema.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(400).json({
      error: parsedPayload.error.errors,
    });
    return;
  }

  // We await as we are saving the todo in mongoDB
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
  });

  res.json({
    msg: "Todo created successfully",
  });
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodoSchema.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(400).json({
      error: parsedPayload.error.errors,
    });
    return;
  }

  await todo.updateOne(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "Todo updated successfully",
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
