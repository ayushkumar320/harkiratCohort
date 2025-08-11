function sumVal(a, b) {
  // do things with the input and return an output
  const sumValue = a + b;
  return sumValue;
}

const value = sumVal(2, 3);
// console.log(value);

// Function can take other function as input - this is called callbacks

// Below is a case where callbacks can be implemented

// function sum(num1, num2) {
//   let result = num1 + num2;
//   return result;
// }

// changed logic for sum function

function sum(num1, num2, funcToCall) {
  let result = num1 + num2;
  funcToCall(result);
}

function displayResult(data) {
  console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
  console.log("Sum's result is : " + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum

sum(2, 3, displayResult);