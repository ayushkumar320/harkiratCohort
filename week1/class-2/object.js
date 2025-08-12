// Objects - Objects are a fundamental part of JavaScript and are used to store collections of data and more complex entities.

const person = {
  name: "Alice",
  age: 25,
  city: "Wonderland"
};

// Accessing Object Properties
console.log(person.name);  // Output: Alice
console.log(person["age"]); // Output: 25

// Adding a New Property
person.job = "Engineer";
console.log(person.job);    // Output: Engineer

// Deleting a Property
delete person.city;
console.log(person.city);   // Output: undefined


// Object Methods Explanation
function objectMethods(obj) {
  console.log("Original Object:", obj);

  let keys = Object.keys(obj);
  console.log("After Object.keys():", keys);

  let values = Object.values(obj);
  console.log("After Object.values():", values);

  let entries = Object.entries(obj);
  console.log("After Object.entries():", entries);

  let hasProp = obj.hasOwnProperty("property");
  console.log("After hasOwnProperty():", hasProp);

  let newObj = Object.assign({}, obj, { newProperty: "newValue" });
  console.log("After Object.assign():", newObj);


}

// Example Usage for Object Methods
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);

