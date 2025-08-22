const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");
function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const token = req.headers.authorization;

  const words = token.split(" ");
  const jwtToken = words[1];

  // JWT Verification
  let decodedValue;
  try {
    decodedValue = jwt.verify(jwtToken, JWT_SECRET);
  } catch (e) {
    return res.status(401).json({msg: "Invalid token"});
  }
  if (decodedValue.username) {
    next();
  } else {
    res.status(403).json({
      msg: "You are not authorized to access this resource",
    });
  }
}

module.exports = userMiddleware;
