import express from "express";
import adminRouter from "./routes/admin.js";
import userRouter from "./routes/user.js";
const app = express();

app.use(express.json()); // Middleware for parsing JSON request bodies

app.use("/admin", adminRouter);
app.use("/user", userRouter);


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});