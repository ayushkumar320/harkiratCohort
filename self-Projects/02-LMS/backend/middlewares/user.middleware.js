import jwt from "jsonwebtoken";
import { User } from "../db";
import dotenv from "dotenv";
dotenv.config();
const secret = process.env.JWT_SECRET;

function userMiddleware(req, res, next) {
  const token = req.body.authorization;
  const word = token.split(" ");
  const jwtToken = word[1];

  const decodedToken = jwt.verify(jwtToken, secret);

  // We will check if the decoded token's username exists in the database
  if(decodedToken.username) {
    User.findOne({username: decodedToken.username}, function(err, user) {
      if(err) {
        return res.status(500).json({ message: "Internal server error" });
      }
      if(!user) {
        return res.status(403).json({ message: "Forbidden" });
      }
      next();
    });
  } else {
    res.json({ message: "Unauthorized" });
  }
}

export default userMiddleware;
