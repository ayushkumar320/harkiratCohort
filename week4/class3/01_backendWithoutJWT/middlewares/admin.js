import { Admin } from "../db/index.js";

async function adminMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  const admin = await Admin.findOne({
    username: username,
    password: password
  });
  if (admin) {
    next();
  } else {
    res.status(403).json({
      msg: "Admin does not exist!"
    });
  }
}

export default adminMiddleware;