import {useState} from "react";

function App() {
  const [count, setCount] = useState(0);
  console.log("This shows rerendering of App()")
  return (
    <div>
      {/* Here we are not writing any logic on how to update the DOM content, it is taken care by React. This is called Reconciliation */}
      <button onClick = {function() {
        setCount(count + 1);
      }}>Count is {count}</button>
    </div>
  )
}

export default App;
