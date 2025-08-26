import {useState} from "react";
import "./App.css";

let counterId = 3;

function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "Learn React",
      description: "Study the React documentation and build a simple app.",
    },
    {
      id: 2,
      title: "Learn JavaScript",
      description: "Study the JavaScript documentation and build a simple app.",
    },
    {
      id: 3,
      title: "Learn Node.js",
      description: "Study the Node.js documentation and build a simple app.",
    },
  ]);
  function addTodo() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    counterId++;
    setTodo([...todo, {id: counterId, title, description}]);
  }
  return (
    <>
      <input
        style={{
          margin: "12px",
          padding: "12px",
          borderRadius: "4px",
          border: "none",
        }}
        type="text"
        id="title"
        placeholder="Title"
      />
      <input
        style={{
          margin: "12px",
          padding: "12px",
          borderRadius: "4px",
          border: "none",
        }}
        type="text"
        id="description"
        placeholder="Description"
      />
      <button onClick={addTodo}>Add a Todo</button>
      {/* {todo.map(function (item) {
        return <Todo title={item.title} description={item.description} />;
      })} */}

      {/* Adding a key prop, a unique identifier element */}
      {todo.map(function (item) {
        return <Todo key={item.id} title={item.title} description={item.description} />;
      })}
    </>
  );
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h3>{props.description}</h3>
    </div>
  );
}

export default App;
