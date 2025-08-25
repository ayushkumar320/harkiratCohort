
export function Todos({todos}) {
  
  // for Todos(props)
  // const todos = props.todos;
  // Or we can destructure it and simply in place of Todos(props) in function, we can write Todos({todos})
  return <div>
    {todos.map(function(todo) {
      return <div>
        <h1>{todo.title}</h1>
        <h2>{todo.description}</h2>
        <button>{todo.completed == true ? "Completed" : "Mark as done"}</button>
      </div>
    })}
  </div>
}