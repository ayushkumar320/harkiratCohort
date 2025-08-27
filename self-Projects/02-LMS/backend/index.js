import express from "express";
import adminRouter from "./routes/admin.route.js";
import userRouter from "./routes/user.route.js";

const app = express();
app.use(express.json());
app.use("/admin", adminRouter);
app.use("/user", userRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});