# Backend Folder:

- Whenever we get any project, the most important thing is to create the backend part of it.
- Generally, we as a core developer should focus on creating backend of any application first.
- Here in backend folder, we will simply initialize a new Node.js project and set up the necessary dependencies.

```bash
  npm init
```
  - The above command initializes a new Node.js project and creates a `package.json` file.

```bash
  npm install express mongoose cors dotenv
```
  - The above command installs the necessary dependencies for the backend, including Express.js for building the API, Mongoose for interacting with MongoDB, CORS for handling cross-origin requests (which is used to allow requests from different domains to our backend), and dotenv for managing environment variables.

```bash
  npm install -D nodemon
```
  - The above command installs Nodemon as a development dependency, which will automatically restart the server whenever file changes are detected, improving the development workflow.
```bash
  npm install
```
  - If our node_modules is deleted, we can use the above code to reinstall all dependencies listed in `package.json`.
  - We always add node_modules/ in `.gitignore` file to prevent it from being tracked by Git.