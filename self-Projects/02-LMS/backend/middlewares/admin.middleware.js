import jwt from "jsonwebtoken";
import { Admin } from "../db";
import dotenv from "dotenv";
dotenv.config();
const secret = process.env.JWT_SECRET;

function adminMiddleware(req, res, next) {
  const token = req.body.authorization;
  const word = token.split(" ");
  const jwtToken = word[1];

  const decodedToken = jwt.verify(jwtToken, secret);

  // We will check if the decoded token's username exists in the database
  if(decodedToken.username) {
    Admin.findOne({username: decodedToken.username}, function(err, admin) {
      if(err) {
        return res.status(500).json({ message: "Internal server error" });
      }
      if(!admin) {
        return res.status(403).json({ message: "Forbidden" });
      }
      next();
    });
  } else {
    res.json({ message: "Unauthorized" });
  }
}

export default adminMiddleware;