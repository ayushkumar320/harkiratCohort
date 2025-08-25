const fs = require("fs");

fs.appendFile("writeFile.txt", "Hello from writeFile second time!", function(err) {
  if (err) {
    console.log("Error writing the file");
  } else {
    console.log("File written successfully");
  }
});

console.log("check");