import {useState} from 'react';
function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Count count = {count} setCount={setCount}/>
    </div>
  )
}

function Count(props) {
  return <div>
    Count: {props.count}
    <Buttons setCount={props.setCount} count={props.count}/>
  </div>
}

function Buttons(props) {
  return <div>
    <button onClick = {function() {
      props.setCount(props.count + 1);
    }}>Increase</button>
    <button onClick = {function() {
      props.setCount(props.count - 1);
    }}>Decrease</button>
  </div>
}

export default App;