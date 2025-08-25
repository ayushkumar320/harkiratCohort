const fs = require("fs");

// Async function
fs.readFile("checkAsync.txt", "utf-8", function(err, data) {
  if (err) {
    console.log("Error reading the file!");
  } else {
    console.log(data);
  }
});
console.log("check!");

// As reading file takes time and it is an async process, the below console.log("check") gets executed before the file is read

// Sync Version of it
const dataSync = fs.readFileSync("check.txt", "utf-8");
console.log(dataSync);
console.log("Second check!");