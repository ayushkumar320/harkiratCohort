// JSON - JSON stands for JavaScript Object Notation
// It is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate.


const user = {
  name: "John",
  age: 30,
  city: "New York"
};

// To send this data to anyone, we can convert it to JSON format
const jsonString = JSON.stringify(user);  

console.log(jsonString);
console.log(typeof(jsonString));

// console.log(jsonString["name"]); // This throws an error as jsonString is a string, not an object

// We need to parse it to JSON
// Mostly in JSON we have two function:
// 1. JSON.parse() - This function is used to convert a JSON string into a JavaScript object.
// 2. JSON.stringify() - This function is used to convert a JavaScript object into a JSON string.

const userObject = JSON.parse(jsonString);  // This converts the JSON string back into a JavaScript object so that we can use userObject["name"];

console.log(userObject);
console.log(userObject["name"]);
