// Real benifit of promises - async/await

// Again async await is just a syntactical sugar on top of promises. It still uses callbacks/promises under the hood

// Normal Promise usage: 

function kiratsAsyncFunction(){
  let p = new Promise(function(resolve){
    // do some async logic here
    setTimeout(function(){
      resolve("Hello from promise!");
    }, 3000);
  });
  return p;
}

function main(){
  kiratsAsyncFunction().then(function(data){
    console.log(data);
  });
}

// main();


// The above code can be made more cleaner by async await
// If a function returns a promise, we can use async await
async function mainCleaner(){
  // No callbacks no .then() syntax

  // await waits for the promise to resolve
  let value = await kiratsAsyncFunction(); 
  console.log("hi there after await");     // this will log only after the promise resolves as it is below await
  console.log(value);
}

mainCleaner();
console.log("after main");    /// This will not get stuck


// Important points
/*
1. Async/await is just syntactical sugar on top of promises.
2. It makes asynchronous code look and behave like synchronous code.
3. Error handling is easier with try/catch blocks.
4. Always use await with a promise-returning function.
5. Be aware of the execution order; code after await will not run until the promise resolves.
6. await can not be called on higher-level functions (here kiratsAsyncFunction) directly; it must be used within an async function.
7. It is the replacement of .then()
*/
