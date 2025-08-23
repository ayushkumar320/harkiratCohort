import React from 'react';

// State and component

// Global state

// let state = {
//   count: 0
// }

// The above is not a state variable.

function App() {

  // With the the state gets updated but it never re-renders the component

  // function onClickHandler() {
  //   state.count++
  // }

  // This is not re-rendering because react does not know that the state has changed
  // We need to use a state management solution like useState to trigger re-renders
  // useState is a hook which allows us to add state to functional components

  const [count, setCount] = React.useState(0);  // Assigning count to 0 in the beginning

  // The above is a syntax of array destructuring where we are extracting the state variable and the function to update it from the array returned by useState. In simple words useState[0] gives us the current state and useState[1] gives us the function to update it.
  // The above can be written as
  // const count = useState[0];
  // const setCount = useState[1];

  // Defining the click handler function
  // function onClickHandler() {
  //   setCount(count + 1);
  // }

  return (
    <div>
      {/* <button onClick={onClickHandler}>Counter {count}</button> */}
      
      {/* We can also use setCount directly */}
      {/* <button onClick={() => setCount(count + 1)}>Counter {count}</button> */}

      {/* Using custom component */}

      <CustomButton count = {count} setCount = {setCount}/>

    </div>
  )
}

// Component
function CustomButton(props) {

  function onClickHandler() {
    props.setCount(props.count + 1);
  }

  return <button onClick = {onClickHandler}>
    Counter {props.count}
  </button>;
}

export default App
