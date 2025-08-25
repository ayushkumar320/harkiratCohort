// Without setInterval

// We can use setTimeout which calls the function after a delay, so we can recursively call setTimeout
let counter = 0;

function increaseCounter() {
  counter++;
  console.log(counter);
  setTimeout(increaseCounter, 1000);
}
setTimeout(increaseCounter, 1000);