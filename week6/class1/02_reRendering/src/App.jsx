import React, {useState} from "react";
import {MyHeader} from "./components/Header";
import "./App.css";

function App() {
  const [age, setRandomAge] = useState(19);

  function randomGen() {
    const newAge = Math.floor(Math.random() * 100 + 1);
    setRandomAge(newAge);
  }
  // Harkirat's way, changing the title
  const [title, setTitle] = useState("my name is ayush");
  function updateTitle() {
    setTitle("my name is " + Math.random());
  }

  return (
    <div>
      <MyHeader name="Ayush" age={age} randomGen={randomGen} />      
      <button onClick={updateTitle}>Update the title</button>
      <Header title={title} />
      <Header title="harkirat" />
      <Footer title="This is the footer" />
      <Footer title="This is the footer" />
      <Footer title="This is the footer" />
      <HeaderWithButton />
    </div>
  );
}

// function Header(props) {
//   return (
//     <div>
//       <h1>{props.title}</h1>
//     </div>
//   )
// }

// Pushed the state down to the component, which only re renders this parent component HeaderWithButton so that only HeaderWithButton re-renders when the title changes.

function HeaderWithButton() {
  const [title, setTitle] = useState("my name is ayush");
  function updateTitle() {
    setTitle("my name is " + Math.random());
  }
  return (
    <div>
      <button onClick={updateTitle}>Update the title</button>
      <Header title={title} />
    </div>
  );
}

// Other way - Using React.memo(), only the parent App changes as setTitle is called, but it does not allows the child components to re-render.

const Header = React.memo(function({title}) {
  return (
    <h1>{title}</h1>
  )
});

const Footer = React.memo(function({title}) {
  return (
    <h1>{title}</h1>
  )
})


export default App;
