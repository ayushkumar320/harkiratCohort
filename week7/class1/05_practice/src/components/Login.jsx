import "./Login.css";
function Login() {
  return (
    <div className="card">
      <div className="content">
        <h3>Login</h3>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button className="btn">Login</button>
      </div>
    </div>
  );
}

export default Login;
