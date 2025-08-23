import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([{
    title: "Go to gym",
    description: "Go to gym from 7-9",
    completed: false
  }, {
    title: "Study DSA",
    description: "Study DSA from 9-11",
    completed: false
  }]);

  // todos = [1, 2]
  // [...todos, 3] = [1, 2, 3]. The (...) spreads the existing elements and adds a new element
  function addTodo() {
    setTodos([...todos, {
      title: "New Todo",
      description: "New Todo Description",
      completed: false
    }]);  
  }

  return (
    <div>
      {/* One way to render */}
      {/* <Todo title={todos[0].title} description={todos[0].description} />
      <Todo title={todos[1].title} description={todos[1].description} /> */}

      <button onClick = {addTodo}>Add Todo</button>

      {/* Rendering using map to iterate over all the values in array and return <Todo /> components */}
      {todos.map(function(todo) {
        return <Todo title={todo.title} description={todo.description} />
      })}

    </div>
  )
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  )
}

export default App
