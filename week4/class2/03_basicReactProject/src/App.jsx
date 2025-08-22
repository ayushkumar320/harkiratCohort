import {useState} from "react";
import "./App.css";

// When we make dynamic websites, we write a lot of JS that manipulates the DOM.

function App() {
  // State Variable - If this thing changes, the component will re-render
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={function() {
        setCount(Math.floor(Math.random()*10 + 1));
      }}>
        count is {count}
      </button>
    </div>
  );
}

export default App;
