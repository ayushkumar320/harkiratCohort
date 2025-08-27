import { useState, useEffect, useMemo } from 'react'
import './App.css'

// useMemo is used if across renders, we need to remember the value. As when we click on counter, the whole element re renders and the for loop runs again to calculate the sum which is very inefficient.
// We can use useEffect as well
function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  // let count = 0;
  // for(let i = 1; i <= inputValue; i++) {
  //   count = count + i;
  // }

  // useEffect method
  // The problem with useEffect is we are updating the state variable (finalValue) which causes a re-render and also input value changes, which makes it 2 renders.
  // const [finalValue, setFinalValue] = useState(0);
  // useEffect(() => {
  //   let count = 0;
  //   for(let i = 1; i <= inputValue; i++) {
  //     count = count + i;
  //   }
  //   setFinalValue(count);
  // }, [inputValue])

  // We can use useMemo which will help us to avoid the 2 times re-rendering which happens with useEffect.
  // This accepts a function, which will run only when inputValue changes.
  let count = useMemo(() => {
    let count = 0;
    for(let i = 1; i <= inputValue; i++) {
      count = count + i;
    }
    return count;
  }, [inputValue]);
  // In above we are not using any extra state variable.

  return (
    <>
      <input onChange={function(e) {
        setInputValue(e.target.value);
      }} placeholder="Find sum from 1 to n"/>
      <p>Sum from 1 to {inputValue} is {count}</p>
      {/* <p>Sum from 1 to {inputValue} is {finalValue}</p> */}
      <button onClick={() => setCounter(counter + 1)}>Counter ({counter})</button>
    </>
  )
}

export default App
