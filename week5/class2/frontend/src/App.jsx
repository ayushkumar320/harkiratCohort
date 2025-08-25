import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  // Hitting the backend for data from database. this is a bad way as so many requests go out from the frontend!
  // The below is not a right approach to hit the backend for data, we can fix this with useEffect hook!
  fetch("http://localhost:3000/todos").then(async function(res) {
    const json = await res.json();
    setTodos(json);
  });

  return (
    <div>
      <CreateTodo />
      <Todos todos = {todos} />
    </div>
  )
}

export default App
