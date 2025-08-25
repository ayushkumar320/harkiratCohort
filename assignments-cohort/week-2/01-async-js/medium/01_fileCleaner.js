const fs = require("fs");
fs.readFile("notCleaned.txt", "utf-8", function (err, data) {
  if (err) return console.error("Error:", err);
  const cleaned = data.split(/\s+/).join(" ");
  console.log(cleaned);
});
