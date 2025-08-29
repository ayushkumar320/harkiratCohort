import {useState, useEffect} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  useEffect(function () {
    fetch("https://api.github.com/users/ayushkumar320").then(async function (res) {
      const data = await res.json();
      setData(data);
    });
  }, []);
  return (
    <>
      <h1>Github user card</h1>
      <div>
        <img src={data.avatar_url} alt={data.login} />
        <h2>Name: {data.name}</h2>
        <p>Bio: {data.bio}</p>
        <p>Location: {data.location}</p>
        <a href={data.html_url}>View Profile</a>
      </div>
    </>
  );
}

export default App;
