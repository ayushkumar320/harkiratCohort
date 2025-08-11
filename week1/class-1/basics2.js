// setTimeout - calls the function after a timeout
// first argument - function to call after given time
// second argument - time in miliseconds after which it calls the function (n * 1000) = n seconds

function greet(){
  console.log("hello world");
}

setTimeout(greet, 3000);

// console.log(setTimeout(greet, 3 * 1000))


// setInterval() - This function is used to call the function at every given interval

setInterval(greet, 2000);  // In every 2 second function gets called