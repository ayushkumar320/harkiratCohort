// Write a program which prints all the even numbers in an array

const numbers = [21, 22, 23, 24, 26];

for (let i = 0; i < numbers.length; i++){
  if(numbers[i] % 2 === 0){
    console.log(numbers[i]);
  } 
}

// Write a program to find the biggest element in an array

let biggest = numbers[0];

for(let i = 0; i < numbers.length; i++){
  if(numbers[i] > biggest){
    biggest = numbers[i];
  }
}
console.log(biggest);

// Printing users with male gender
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

for(let i = 0; i < allUsers.length; i++){
  if(allUsers[i].gender === "male"){
    console.log(allUsers[i].firstName);
  }
}