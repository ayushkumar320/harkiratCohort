import {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/").then(function (response) {
      setTodos(response.data);
    });
  }, []);

  return (
    <>
      {todos.map(function (todo) {
        return (
          <Todo key={todo.id} title={todo.title} completed={todo.completed} />
        );
      })}
      <TodoId id={2} />
    </>
  );
}

function Todo({title, completed}) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{completed ? "Completed" : "Not completed"}</h2>
    </div>
  );
}

function TodoId({id}) {
  const [newTodo, setNewTodo] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3000/${id}`)
      .then(function (response) {
        // Backend returns array, so take the first element
        setNewTodo(response.data[0] || {});
      });
  }, [id]); // If we will leave the dependency array as empty, it will only run once when the component mounts and will not re-run on subsequent renders when we change the id.

  return (
    <div>
      <h1>{newTodo.title}</h1>
      <h2>{newTodo.completed ? "Completed" : "Not completed"}</h2>
    </div>
  );
}

export default App;
