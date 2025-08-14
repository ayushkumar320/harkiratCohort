// Map function is a higher-order function that allows you to transform an array by applying a function to each element, resulting in a new array with the transformed values.

// General syntax => map(arr, f) where arr is the array to be transformed and f is the function to apply to each element.

const input = [1, 2, 3, 4, 5];

function transform(n){
  return n*2;
}

// map(input, transform); Not the syntax

const ans = input.map(transform); // This applies the transform function to each element of the input array

console.log(ans);

const array1 = [1, 2, 3, 4, 5];
const newArr = array1.map(function(n){
  return n**2;
});
console.log(newArr);

// We can use arrow function as well

const array2 = [1, 2, 3, 4, 5];
const newArr2 = array2.map((n) => {
  return n**2;
});
// const newArr2 = array2.map((n) => n**2); Concise way to write arrow function
console.log(newArr2);