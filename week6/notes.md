## React component return
- Whenever we are returning something from any react component it should only be a single child, it shouldn't be multiple siblings.
- Inside the top level child, there can be multiple children.
- It is so because it makes it easy to do reconciliation. And makes the rendering process more efficient.
- If we dont want to add an extra div, we can simple return all the children in an empty tag <></> which is called a React Fragment.
- Adding <></> will not add any extra nodes to the DOM and is better for performance.

## Re-rendering in react
