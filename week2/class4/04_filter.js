// Filtering - The filter() method creates a new array with all elements that pass the test implemented by the provided function.

const array = [1, 2, 3, 4, 5];
const filteredArray = array.filter((n) => n > 2);  // This will keep only the elements greater than 2
console.log(filteredArray);


const arr = [1, 2, 3, 4, 5, 5, 6 ,7 ,8];

const evenNums = arr.filter(function(n){
  // Inside function, we provide condition to filter even numbers
  return n%2===0;
});

console.log(evenNums); // This will log all even numbers from the array