// Normal function: 

function sum(a, b){
  return a + b;
}

// But sometimes functions are so simple that we can write them in a more concise way using arrow functions.

const sumArrow = (a, b) => {
  return a + b;
}

// If the function body is a single expression, we can omit the braces and the return keyword:

const sumArrowConcise = (a, b) => a + b;

// There is a key difference in function and arrow function is how they are binded and this keyword works, usually in arrow function this keyword is not binded to the function context.

const ans = sumArrowConcise(5, 10);
console.log(ans);