function findSum(n){
  let ans = 0;
  for(let i = 1; i <= n; i++){
    ans += i;
  }
  return ans;
}

function findSumTill100(){
  console.log(findSum(100));
}

/*

// busy waiting
function syncSleep(){
  let a = 1;
  for (let i = 0; i < 100000000000; i++){
    a++;
  }
}

syncSleep(); // This will block the main thread as it will be busy waiting for the completion of the function call
*/

setTimeout(findSumTill100, 2000);    // after 2 second it will call findSumTill100
console.log("hello world!");  // This gets printed immediately


// Common async function that JavaScript provides

// 1. setTimeout(callback, time in milliseconds) - It allows you to run a function after a delay.

// 2. fs.readFile(filePath, callback) - It allows you to read a file asynchronously.

// 3. fetch(url, options) - To fetch some data from API endpoint.