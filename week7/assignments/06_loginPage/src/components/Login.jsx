import {useNavigate} from "react-router-dom"

function Login() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Login via OTP</h1>
      <input type="text" placeholder="Enter your phone number" style={{padding: "12px", borderRadius: "4px", border: "none"}}/> <br />
      <br />
      <button
        onClick={function() {
          navigate("/otp");
        }}
      >Send OTP</button>
    </div>
  )
}

export default Login;