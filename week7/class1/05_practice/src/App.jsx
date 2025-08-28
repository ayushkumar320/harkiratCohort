import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Signin from './components/Signin';
import { useNavigate } from 'react-router-dom';
import "./App.css";
import Counter from './components/Counter';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Counter /> 
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Appbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <button className="nav" onClick={function() {
        navigate("/login")
      }}>Login</button>
      <button className="nav" onClick={function() {
        navigate("/signin")
      }}>Signin</button>
    </div>
  )
}

export default App;