// Simple zod way to check login input validation

const express = require('express');
const zod = require('zod');

const app = express();

app.use(express.json());
const schema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(8)
});

app.post('/login', function(req, res){
  const response = schema.safeParse(req.body);
  if(!response.success) {
    res.json({
      msg: "Something is wrong with the inputs!"
    });
  } else {

    res.json({
      msg: "User loggedin successfully",
      email: req.body.email
    });
  }
});

app.listen(3000, function(){
  console.log("Server is started");
});