# Jargon - DOM Manipulation
- The HTML what we get from server is called the "Document Object Model" (DOM).
- People created dynamic websites by manipulating the DOM using JavaScript.
- Updating things on the DOM is called DOM manipulation without hard refreshing the page.

# DOM Manipulation
- `append child` - Adds a new child node to a specified parent node.
  - It is used to insert a new element into the DOM.
  - Generally used when we want to create a new task in the to-do list.
- `createElement` - Creates a new HTML element.
  - It is used to create new elements dynamically.
  - Generally used when we want to create a new task in the to-do list.
  - Example: `document.createElement("div")` creates a new div element.
  - To add it to the DOM, we use `appendChild` on an existing element.
  - Example: `document.getElementById("container").appendChild(newDiv)` adds the new div to the container.
- `setAttribute` - Sets the value of an attribute on the specified element.
  - It is used to set attributes like `id`, `class`, `onclick`, etc.
  - Example: `child.setAttribute("id", id)` sets the id of the child element and assigns it to "id" here.
  - Another example: `child.setAttribute("class", "todo-item")` sets the class of the child element to "todo-item".

# Now the problem with TODO App using DOM Manipulation
- Problem with the approach: Very hard to add and remove elements
- No central State
- State is a term used to describe the current condition or status of the application.
- The problem can be solved if we can write a function that takes the state as input and updates the TODO app (state-mapping)

# Problem
- The problem is everytime we are trying to fetch new data from server and update it on the page, the page first clears the existing content before rendering the new content.
- This leads to a flickering effect and a poor user experience.
- We need a way to update the DOM without clearing the existing content.
- React provides a virtual DOM that allows for efficient updates without direct manipulation of the actual DOM.