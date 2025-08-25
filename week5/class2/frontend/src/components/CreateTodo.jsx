
export function CreateTodo() {
  return <div>
    <input 
    style = {{
      padding: "8px",
      margin: "10px",
    }}
    type = "text" placeholder = "Title" /> <br />
    <input 
    style = {{
      padding: "8px",
      margin: "10px",
    }}
    type = "text" placeholder = "Description" /> <br />
    <button
    style={{
      padding: "8px",
      margin: "10px",
    }}
    >Add a todo</button>
  </div>
}