# React

### Why do you need react?
- Any website can be writted in raw HTML, CSS and JS.
- For static websites, websites which never changes it contents, the code is simple and easy to manage.
- For dynamic websites, websites which changes it contents based on user interactions or other factors, the code can become complex and difficult to manage.
- Libraries like React help manage this complexity by providing a structured way to build user interfaces.
- React is just an easier way to write normal HTML/CSS/JS. It’s a new syntax, that under the hood gets converted to HTML/CSS/JS.
- When we use command ```npm run build```, it compiles our React code into plain HTML/CSS/JS that can be served to the browser. 

### Some react jargon:
- Whenever we write React code, we mostly write State and Component.
1. **Component:** A reusable piece of HTML snippet that can be used to build complex interfaces.
2. **State:** A built-in object that stores property values that belong to a component. When the state object changes, the component re-renders. It represents the dynamic thing in our app (things that change).

- For a counter app, the state looks like:
  ```json
  {
    "count": 0
  }
  ```

- For a linkedin clone's navbar the state may look like this:
  ```json
    {
      "topbar": {
        "home": 0,
        "myNetwork": "99+",
        "jobs": "10",
        "messaging": "0",
        "notifications": "10"
      }
    }
  ```
- React is mainly, we maintain a state and make our website dynamic by re-rendering components when the state changes.
- A state change triggers the DOM to update and re-render the affected components.

### Virtual DOM:
- Virtual DOM is a concept where a virtual representation of the UI is kept in memory and synced with the real DOM.
- When a component's state changes, a new virtual DOM tree is created.
- React then compares the new virtual DOM with the previous one (a process called "reconciliation") to determine the minimal set of changes needed to update the real DOM.
- This approach improves performance by reducing the number of direct manipulations to the real DOM, which can be slow and costly.

# Creating a React Project
To create a new React project with Vite, run the following command:
```bash
npm create vite@latest
```
To run the development server:
```bash
npm run dev
```
- Use the above command to create a new React Project with Vite bundler.

### Few Jargons
1. JSX - JSX stands for JavaScript XML. It allows us to write HTML elements in JavaScript and place them in the DOM without using functions like `createElement`.
2. The project will contain a top level `index.html` in which there is only one div with an id of `root`.
3. This `root` div is where our entire React application will be rendered.
4. In `src/main.jsx`, we will use `ReactDOM.render()` to render our root component into the `root` div.
5. The `src/App.jsx` file will contain our main application component or import other components and structure them.
6. All the react code will get compiled into plain HTML/CSS/JS that can be served to the browser. It can be converted by running the build command.
  ```bash
  npm run build
  ```
  - The code gets compiled in HTML/CSS/JS which can be seen in the `dist` folder.
  - After building, we can not make changes to the React code directly. Instead, we need to modify the source files and rebuild the project.
7. Whenever we want to use a JavaScript variable or function in our JSX, we need to wrap it in curly braces `{}`.