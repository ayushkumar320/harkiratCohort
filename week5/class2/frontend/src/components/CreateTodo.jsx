import {useState} from "react";

export function CreateTodo() {
  // React-query
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <input
        style={{
          padding: "8px",
          margin: "10px",
        }}
        onChange={function (e) {
          // However this could be optimized further as it re-renders the component on every keystroke
          const value = e.target.value; // e.target.value gives the current value of the input
          setTitle(value);
        }}
        type="text"
        id="title"
        placeholder="Title"
      />{" "}
      <br />
      <input
        style={{
          padding: "8px",
          margin: "10px",
        }}
        onChange={function (e) {
          const value = e.target.value;
          setDescription(value);
        }}
        type="text"
        id="description"
        placeholder="Description"
      />{" "}
      <br />
      <button
        style={{
          padding: "8px",
          margin: "10px",
        }}
        onClick={function () {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              // One way to get, but this is not the cleanest syntax as it still uses document DOM, we can use react query to make it optimal
              // title: document.getElementById("title").value,
              // description: document.getElementById("description").value,

              // Using react query:
              title: title,
              description: description,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }).then(async function (res) {
            const json = await res.json();
            alert("Todo added!");
          });
        }}
      >
        Add a todo
      </button>
    </div>
  );
}
