import {useState, useEffect} from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  // useEffect never accepts an async function as callback
  useEffect(function () {
    (async function fetchTodos() {
      try {
        const res = await fetch("http://localhost:3000/");
        const data = await res.json();
        setTodos(data);
      } catch (error) {
        console.error("Error fetching todos:", error);
        // Set some default todos if backend is not available
        setTodos([]);
      }
    })();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  function randomTodo() {
    const randomTitles = [
      "Buy groceries",
      "Walk the dog",
      "Learn React",
      "Read a book",
      "Exercise",
      "Call mom",
      "Clean the house",
      "Write code",
    ];

    const randomTitle = randomTitles[Math.floor(Math.random() * randomTitles.length)];
    const completed = Math.random() > 0.5;
    const newTodo = {
      id: Date.now(), 
      title: randomTitle,
      completed: completed,
    };

    setTodos([...todos, newTodo]);
  }

  return (
    <>
      <button onClick={randomTodo}>Add a new Todo</button>
      {todos.map(function (todo) {
        return (
          <Todo key={todo.id} title={todo.title} completed={todo.completed} />
        );
      })}
    </>
  );
}

function Todo(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.completed ? "Completed" : "Not Completed"}</p>
    </div>
  );
}

export default App;
