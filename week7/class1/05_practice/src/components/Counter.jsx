import {useState} from "react";
import {useContext} from "react";
import CounterContext from "../context";
function Counter() {
  const [count, setCount] = useState(0);
  return <div>
    <CounterContext.Provider value = {{count, setCount}}>
      <CounterRender />
    </CounterContext.Provider>
  </div>
}

// Since now state variable count is provided by context, we can use it here
function CounterRender() {
  const {count} = useContext(CounterContext);
  return (
    <div>
      <h1>Counter: {count}</h1>
      <Buttons />
    </div>
  )
}

function Buttons() {
  const {count, setCount} = useContext(CounterContext);
  return (
    <div>
      <button onClick={function() {
        setCount(count + 1);
      }}>Increment</button>
      <button onClick={function() {
        setCount(count - 1);
      }}>Decrement</button>
    </div>
  )
}

export default Counter;