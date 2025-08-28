import "./Login.css";
function Signin() {
  return (
    <div className="card">
      <div className="content">
        <h3>Signin</h3>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button className="btn">Signin</button>
      </div>
    </div>
  );
}

export default Signin;
