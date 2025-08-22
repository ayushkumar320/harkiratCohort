import {User} from "../db/index.js";

async function userMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;

  const user = await User.findOne({
    username: username,
    password: password,
  });
  if (user) {
    req.user = user; 
    next();
  } else {
    res.status(403).json({
      msg: "User does not exist or credentials invalid",
    });
  }
}

export default userMiddleware;
