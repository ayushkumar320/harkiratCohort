import jwt from "jsonwebtoken";
import {Admin} from "../db/index.js";
import dotenv from "dotenv";
dotenv.config();
const secret = process.env.JWT_SECRET;

function adminMiddleware(req, res, next) {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({message: "No token provided"});
    }

    const word = token.split(" ");
    const jwtToken = word[1];

    const decodedToken = jwt.verify(jwtToken, secret);

    // We will check if the decoded token's username exists in the database
    if (decodedToken.username) {
      Admin.findOne({username: decodedToken.username})
        .then((admin) => {
          if (!admin) {
            return res.status(403).json({message: "Admin not found"});
          }
          req.admin = admin; // Attach admin to request
          next();
        })
        .catch((err) => {
          return res.status(500).json({message: "Internal server error"});
        });
    } else {
      res.status(401).json({message: "Invalid token"});
    }
  } catch (error) {
    res.status(401).json({message: "Invalid token"});
  }
}

export default adminMiddleware;
