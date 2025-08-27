import {useState} from "react";
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <input type="text" placeholder="Title" 
        onChange={function(e) {
          setTitle(e.target.value);
        }}
        style={{padding: "10px", margin: "20px"}}
      />
      <input type="text" placeholder="Description"
        onChange={function(e) {
          setDescription(e.target.value);
        }}
        style={{padding: "10px", margin: "20px"}}
      />
      <button
        onClick={function() {
          setTodos([...todos, {title: title, description: description}])
        }}
        style={{padding: "10px", margin: "20px"}}
      >Add Todo</button>
      {todos.map(function(obj) {
        return <Todo title = {obj.title} description = {obj.description}/>
      })}
      
    </div>
  )
}

function Todo(props) {
  return <div>
    <h1>{props.title}</h1>
    <h3>{props.description}</h3>
  </div>
}


export default App
