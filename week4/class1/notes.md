# DOM (Document Object Model)
- DOM (Document Object Model) API is a programming interface for web documents.
- It represents the structure of a document as a tree of objects.
- Each node in the tree corresponds to a part of the document (e.g., elements, attributes, text).
- The DOM allows programming languages to manipulate the structure, style, and content of web pages.

# Key Concepts
- DOM can be accessed and modified using JavaScript.
- Some basic tasks that can be performed using the DOM include:
  - Selecting elements
  - Modifying element content and attributes
  - Adding and removing elements
  - Handling events
- We use selectors to target specific elements in the DOM.
- Example:
  - `document.getElementById("myElement")` selects an element by its ID.
  - `document.getElementsByClassName("myClass")` selects elements by their class name.
  - `document.querySelector("div > p")` selects the first <p> element inside a <div>.

# Concept of dynamic website
- Rendering content dynamically based on user interactions or other factors.
- Updating the DOM in response to events (e.g., button clicks, form submissions).
- Fetching data from APIs and displaying it on the page without reloading.
- React is a JavaScript library for building user interfaces, allowing for the creation of dynamic and interactive web applications.

- To render a normal hello world message in a div, you can use the following JavaScript code:

  ```javascript 
    function populateDiv() {
    const div = document.getElementById("myDiv");
    div.innerHTML = "Hello, World!";
  }
  ```
  - where myDiv is the ID of the div element you want to populate with content.

- To extract values from input box of id say num1 and num2
  ```js
  function getInputValues() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    console.log(num1, num2);
  }
  ```
  - .value() is used to get the current value of an input element.
  - Further we can use `parseInt()` to convert the string values to integers.

- The above logic still runs in front-end JavaScript, meaning it executes in the user's browser rather than on a server.

- If you want to perform calculations on the server-side, you would need to use a server-side language (e.g., Node.js, Python, PHP) and send the data to the server for processing.

- Refer `02_backendWay` to know how server side processing looks like

## Backend way to hit request
- We can use fetch to hit backend endpoints.
- What we have done is
  1. Created a backend server using Express.js which has the route `/sum` to calculate the sum of two numbers under which we are simply accepting the value of a and b from query parameters and calulating the sum in backend.
  ```js
    app.get("/sum", (req, res) => {
      const a = parseInt(req.query.a);
      const b = parseInt(req.query.b);
      res.status(200).send(`The sum of ${a} and ${b} is ${a + b}`);
    });
  ```
  2. Now in `script.js` we will use fetch to call this endpoint and get the result and also we are accepting the value from frontend.
    So inside a function populateDiv(), we have this code:
    ```js
      function populateDiv(){
        const a = document.getElementById("num1").value;
        const b = document.getElementById("num2").value;

      // Now to send value of a and b in backend,
        async function getData() {
          const response = await fetch(`http://localhost:3000/sum?a=${a}&b=${b}`); 
          // This sends the request to the backend server with values of a and b
          const result = await response.text(); 
          // The .text() method reads the response body as text
          // Now lastly rendering the result
          document.getElementById("result").innerText = result;
        }
        getData();
      }
    ```

