import "./App.css";
function App() {
  return (
    <div className="container">
      <div className="content">
        <div className="coverimg">
          <img src="https://images.unsplash.com/photo-1630873273144-cfa9079fdd72?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="profile">
          <img src="https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="details">
          <h2>John Doe</h2>
          <p>Web Developer</p>
          <hr />
          <p>Location: San Francisco, CA</p>
          <p>Bio: A passionate web developer with a love for creating interactive applications.</p>
          <p>Followers: 120</p>
        </div>
      </div>
    </div>
  )
}

export default App;