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