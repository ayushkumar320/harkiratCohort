import {useState, useMemo} from "react";

function getRandomWord() {
  const words = [
    "lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipiscing",
    "elit",
    "sed",
    "do",
    "eiusmod",
    "tempor",
    "incididunt",
    "ut",
    "labore",
    "et",
    "dolore",
    "magna",
    "aliqua",
  ];
  return words[Math.floor(Math.random() * words.length)];
}

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const para = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      arr.push(getRandomWord());
    }
    return arr.join(" ");
  }, [count]);

  function handleGenerate() {
    const n = parseInt(inputValue);
    setCount(n);
  }

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter number of words"
      />
      <button onClick={handleGenerate}>Generate</button>
      <p style={{marginTop: "1rem"}}>{para}</p>
    </div>
  );
}

export default App;
