import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

(async function connectDB() {
  const res = await mongoose.connect(process.env.MONGODB_URI);
  console.log("MongoDB connected:", res.connection.name);
})();

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: {type: Boolean, default: false},
});

const todo = mongoose.model("Todos", todoSchema);

export default todo;
