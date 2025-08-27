import {memo, useState, useCallback, useEffect, useMemo} from "react";

var a = 1;

function App() {
  const [counter, setCounter] = useState(0);

  // var a = 1;
  // If a is a variable, it does not re renders but what if a is a function?
  
  /*
  var a = function() {
    console.log("function a called");
  }
  */

  // This rerenders the Demo component, as functions or objects are not referentially stable.
  /*
    Example: 
    function sum(a, b) {
      return a + b;
    }
    function sum2(a, b) {
      return a + b;
    }
    console.log(a==b)  This will be false, as a and b are different function instances.

    But 
    var a = 1;
    var b = 1;
    console.log(a==b) This will be true as a and b are the same primitive value.
  */

  // To solve the above issue, we can use useCallback or useMemo to memoize the function or object.

  var a = useCallback(function() {
    console.log("function a called");
  }, []);
  // Now it does not re renders the Demo component as a is memoized.

  return (
    <div>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter {counter}
      </button>

      <Demo a={a} />
    </div>
  );
}

const Demo = memo(function ({a}) {
  console.log("rerender");
  return <div>hi there {a}</div>;
});

export default App;
