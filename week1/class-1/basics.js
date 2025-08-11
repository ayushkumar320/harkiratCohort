// var a = 1;      // var is not used much
// or
let a = 1;

a = 2;
console.log(a);

// but using const will give an error

const b = 1;

// b = 2; // This will throw an error because 'b' is a constant and cannot be reassigned.

let firstName = "Ayush";
let age = 18;
let isMarried = false;

console.log(`Name is ${firstName} and age is ${age}`);

// Assignment - based on isMarried valriable, print first name and maritial status

// We can use terniary operator (?) or if-else statement
console.log(firstName + " is " + (isMarried ? "married" : "not married"));

// Using if else statement

if (isMarried) {
  console.log(firstName + " is married");
} else {
  console.log(firstName + " is not married");
}

// Loops - Loops are used to iterate over a block of code multiple times

let answer = 0;
for(let i = 1; i < 7; i++){
  answer+=i;
}
console.log(answer);


// Array - Used to store multiple values in a single variable

const personArray = ["harkirat", "ayush", "kirat"];

console.log(personArray[0]); 
console.log(personArray[1]); 
console.log(personArray[2]); 

const ages = [19, 20, 23];


// Objects - Objects are used to store keyed collections of various data and more complex entities.


const personObject = {
  firstName: "Ayush",
  gender: "male",
}
console.log(personObject.firstName);
console.log(personObject["firstName"]);

const allUsers = [
  {
    firstName: "harkirat",
    gender: "male",
  },
  {
    firstName: "kirat",
    gender: "male",
  },
  {
    firstName: "priya",
    gender: "female",
  },
]