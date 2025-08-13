// Our javascript thread is single-threaded, meaning it can only execute one piece of code at a time.

// JS can ask for more work to be done while it is still processing other tasks.

function onDone(){
  console.log("hi there");
}

setTimeout(onDone, 2000);   // This is an async function

console.log("after setTimeout");