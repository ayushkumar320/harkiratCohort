import "./App.css";
function App() {
  return (
    <div className="container">
      <BottomBar />
    </div>
  )
}

function BottomBar() {
  return (
    <div className="bottom">
      <button
      onClick={() => changeBg('red')}
      >Red</button>
      <button
      onClick={() => changeBg('green')}
      >Green</button>
      <button
      onClick={() => changeBg('blue')}
      >Blue</button>
      <button
      onClick={() => changeBg('yellow')}
      >Yellow</button>
    </div>
  )
}

function changeBg(color) {
  document.body.style.backgroundColor = color;
}

export default App;