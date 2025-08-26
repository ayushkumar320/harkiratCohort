// My way

export function MyHeader(props) {
  return (
    <div>
      <button
      onClick={props.randomGen}
      >Click me to change the age</button>
      <h1>My name is {props.name}</h1>
      <h2>My age is {props.age}</h2>
    </div>
  )
}


