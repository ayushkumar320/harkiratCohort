import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Dashboard} from "./components/Dashboard";
import {Landing} from "./components/Landing";
import {useNavigate} from "react-router-dom";
function App() {

  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Appbar() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={function () {
          // window.location.href = "/";
          navigate("/");
        }}
      >
        Landing Page
      </button>
      <button
        onClick={function () {
          // window.location.href = "/dashboard";
          navigate("/dashboard");
        }}
      >
        Dashboard page
      </button>
    </div>
  );
}

export default App;
