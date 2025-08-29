const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/randomNotification", (req, res) => {
  res.json({
    network: Math.floor(Math.random() * 100),
    jobs: Math.floor(Math.random() * 100),
    notification: Math.floor(Math.random() * 100),
    messaging: Math.floor(Math.random() * 100)
  });
});

app.listen(3000, function() {
  console.log(`Server is live at http://localhost:3000/randomNotification`);
})