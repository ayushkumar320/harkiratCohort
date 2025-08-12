// Task - create a promise and resolve it using .then() and await, also compare the same function by using direct callbacks!

// Callback 

function readData(callback){
  setTimeout(function(){
    callback("Data received");
  }, 2000);
}

function logToConsole(data){
  console.log(data);
}

// using callback now
// readData(logToConsole);

// Using promises

function promiseReadData(){
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve("Data received");
    }, 2000);
  });
}

// promiseReadData().then(function(data){
//   console.log(data);
// });


// Using async await

function readDataawait(){
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve("Data received");
    }, 2000);
  });
}

async function readingData(){
  const data = await readDataawait();
  console.log(data);
}

readingData();