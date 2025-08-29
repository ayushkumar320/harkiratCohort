import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import OTP from './components/OTP';
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/otp" element={<OTP />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
