function square(n){
  return n*n;
}

function cube(n){
  return n*n*n;
}

function sumOfSquares(a, b){
  const val1 = square(a);
  const val2 = square(b);
  return val1 + val2;
}
const sum = sumOfSquares(3, 4);
console.log(sum);

// DRY violated
function sumOfCubes(a, b){
  const cube1 = cube(a);
  const cube2 = cube(b);
  return cube1 + cube2;
}
const sumCubes = sumOfCubes(3, 4);
console.log(sumCubes);

// Fixed code

function sumOfSomething(a, b, callback){

  // Here callback is a function that will be passed in during the calling time and that callback function will be applied to both a and b
  const val1 = callback(a);
  const val2 = callback(b);
  return val1 + val2;
}

// Functional arguments
const sumOfcubes = sumOfSomething(3, 4, cube);
console.log(sumOfcubes);
