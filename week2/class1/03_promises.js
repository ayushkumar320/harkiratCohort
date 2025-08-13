// Basic Promise example:

/*
const myPromise = new Promise((resolve, reject) => {
  const success = true; // Simulate success or failure
  if (success) {
    resolve("Operation was successful!");
  } else {
    reject("Operation failed.");
  }
});

async function handlePromise() {
  try {
    const result = await myPromise;
    console.log(result); // Output: Operation was successful!
  } catch (error) {
    console.error(error); // Output: Operation failed.
  }
}
handlePromise();
*/


// Where can promise be used

// Example - write a async function

// Approach 1: Uses callback (fn)
function myOwnSetTimeout(fn, duration){
  setTimeout(fn, duration);
}

myOwnSetTimeout(function(){
  console.log("hi there!");
}, 1000);

// Approach 2 - Using Promises or Promisifying the function (we will not accept the callback here)

function myNewSetTimeout(duration){
  let p = new Promise(function(resolve){
    // after 1 second call resolve
    // wait for duration seconds and tell the caller that I am done 
    setTimeout(function(){
      resolve();
    }, duration);  
  });
  return p;
}

myNewSetTimeout(1000)
  .then(function(){
    console.log("log the first thing");
  });

// Or calling by anothe rmethod

async function handleTimeout(){
  await myNewSetTimeout(1000);
  console.log("log the first thing using async/await");
}

handleTimeout();