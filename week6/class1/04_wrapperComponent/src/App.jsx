import { useState } from 'react'
import './App.css'

function App() {
  
  return (
    <>
      {/* The below is one way, which is rarely used for this way, we pass innerComponent as a prop */}
      {/* <CardWrapper innerComponent={<TextComponent />} />
      <CardWrapper innerComponent={<TextComponent2 />} /> */}

      {/* Other popular way for this we always need to pass children as a prop*/}
      <CardWrapper2>
        <TextComponent />
      </CardWrapper2>
      <CardWrapper2>
        <TextComponent2 />
      </CardWrapper2>
      <CardWrapper2>
        <div>
          Hi from div
        </div>
      </CardWrapper2>

    </>
  )
}

function TextComponent() {
  return <div>Hello</div>
}
function TextComponent2() {
  return <div>Hi There</div>
}


// function CardWrapper({innerComponent}) {
//   return <div
//     style={{border: "2px solid black", padding: "1rem", borderRadius: "8px", margin: "10px"}}
//   >
//     {innerComponent}
//   </div>
// }

// 2nd Way: We need to pass children as prop only user {}

function CardWrapper2({children}) {
  return <div
    style={{border: "2px solid black", padding: "1rem", borderRadius: "8px", margin: "10px"}}
  >
    {children}
  </div>
}

export default App
