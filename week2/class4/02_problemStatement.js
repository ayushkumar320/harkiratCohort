// Given an array, give me back a new array in which every value is numtiplied by 2

const input = [1, 2, 3, 4 ,5];

// General solution:

const newArray = []
for(let i = 0; i < input.length; i++){
  newArray.push(input[i] * 2);
}

console.log(newArray);

// This can be done easily using maps 