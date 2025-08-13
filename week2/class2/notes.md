# Topics covered:
1. What is ECMAScript?
2. What is JavaScript?
3. What is Node.js?
4. What is Bun?

---

## ECMAScript
- ECMAScript is a scripting language specification that forms the basis for JavaScript.
- It standardizes the core features of the language, including syntax, types, and built-in objects.
- The specification is maintained by ECMA International and has undergone several revisions, with ES6 (ECMAScript 2015) being a significant update.
- Basically it says that "How a JavaScript should look like?"
- Every Javascript complier should support all the features defined in the ECMAScript specification.

---

## JavaScript

- JavaScript is a high-level, dynamic, and interpreted programming language.
- JavaScript is a scripting language that conforms to the ECMAScript specification. It's the most widely known and used implementation of ECMAScript.

- ### Beyond ECMAScript - 
  JavaScript has several features and APIs that extend beyond the ECMAScript specification, including:
  - The Document Object Model (DOM) for interacting with HTML and XML documents.
  - Browser APIs for handling events, making network requests, and accessing device capabilities.
  - Node.js APIs for server-side development, including file system access and networking.
- Common JS Browser engines
  1. V8 (Chrome, Node.js)
  2. SpiderMonkey (Firefox)
  3. JavaScriptCore (Safari)
  - These browser engines compile the JavaScript code into machine code (binary code) for execution.
---
## NodeJS

- Node.js is a "runtime environment" that allows JavaScript to be executed on the server side.
- It uses the V8 JavaScript engine, which compiles JavaScript into machine code for execution.
- The V8 engine was pulled out of Chrome and with additional features added, it was used to create backend JavaScript applications.

---

## Bun
- Bun is a competitor to Node.js and Deno, designed for speed and efficiency.
- It includes a JavaScript runtime, a package manager, and a bundler all in one.
- Bun is built from scratch to focus on three main goals: start fast (cold starts), run fast (performance), and be a great and complete tool (batteries included).
- Bun is written in Zig (low latency language).
- Bun is significantly faster than both Node.js and Deno.