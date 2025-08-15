// Zod was used to validate the request body and ensure it meets the expected schema.
const express = require("express");
const {z} = require("zod");

const app = express();

app.use(express.json());

// Now we can define a Zod schema for our request body
// const schema = z.array(z.number());

// {
//   email: string => email
//   passowrd: atleast 8 letters
//   country: "IN", "US"
// }

const schema = z.object({
  email: z.string(),
  password: z.string().min(8),
  country: z.literal("IN").or(z.literal("US")),
  kidneys: z.array(z.number())
})

app.post("/health-checkup", function (req, res) {
  const kidneys = req.body;
  const response = schema.safeParse(kidneys);

  if (!response.success) {
    return res.status(400).json({
      msg: "Input is invalid!",
      received: kidneys,
    });
  }

  res.json({
    msg: "Input is valid!",
    data: response
  });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
