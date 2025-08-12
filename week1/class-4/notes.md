# Async vs Sync functions 

## What does synchronous mean?
- Together, one after the other, sequential.
- Only one thing is happening at a time.

## What does asynchronous mean?
- Not together, one after the other, non-sequential.
- Multiple things can happen at the same time.
- Opposite of synchronous.

Ground example - To make maggie, we are parallely boiling water and preparing the masala.

---

### Human brain and body is single threaded
- Single threaded - Only one thing can happen at a time.
- However, we can context switch between tasks quickly, or we can delegate tasks to others.
- The same is true for JavaScript. JavaScript is single-threaded, meaning it can only execute one piece of code at a time. However, it can handle asynchronous operations using callbacks, promises, and async/await.

--- 

### Advantage of asynchronous behavior of JS
- Improved performance and responsiveness.
- Better resource utilization.
- Allows for handling multiple tasks concurrently.
- Real world example: Reading a file asynchronously allows the program to continue executing other code while waiting for the file to be read.
---
### Key points: 
- Even though JavaScript is single-threaded, it can handle asynchronous operations by context switching and delegating tasks to other (assigning tasks to other threads).
- By async functions JS can context switch and delegate tasks more efficiently, allowing for better performance and responsiveness.