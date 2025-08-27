import {useEffect, useState} from "react";
import axios from "axios";

// Custom hook
function useTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then(response => {
        setTodos(response.data);
      });
  }, []);
  return todos;
}

function App() {
  const todos = useTodos();
  return <div>
    {todos.map(todo => (
      <div key={todo.id}>{todo.title}</div>
    ))}
  </div>
}

export default App;