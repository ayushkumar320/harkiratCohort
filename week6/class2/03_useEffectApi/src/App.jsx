import {useState} from "react";
import {useEffect} from "react";
import axios from "axios";
function App() {
  const [selectedId, setSelectedId] = useState(11);

  return (
    <div>
      <button
        onClick={function () {
          setSelectedId(11);
        }}
        style={{padding: "8px", margin: "4px"}}
      >
        11
      </button>
      <button
        onClick={function () {
          setSelectedId(12);
        }}
        style={{padding: "8px", margin: "4px"}}
      >
        12
      </button>
      <button
        onClick={function () {
          setSelectedId(13);
        }}
        style={{padding: "8px", margin: "4px"}}
      >
        13
      </button>
      <button
        onClick={function () {
          setSelectedId(14);
        }}
        style={{padding: "8px", margin: "4px"}}
      >
        14
      </button>
      <button
        onClick={function () {
          setSelectedId(15);
        }}
        style={{padding: "8px", margin: "4px"}}
      >
        15
      </button>
      <Todo id={selectedId} />
    </div>
  );
}

function Todo({id}) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    axios.get(`https://dummyjson.com/todos/${id}`).then(function (res) {
      setTodo(res.data);
    });
  }, [id]);

  return (
    <div>
      <h1>{todo.todo}</h1>
      <h2>{todo.completed ? "✅ Completed" : "❌ Not Completed"}</h2>
    </div>
  );
}

export default App;
