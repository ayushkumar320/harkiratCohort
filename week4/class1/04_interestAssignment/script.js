// Using debouncing

let timeout;
function debounceResult() {
  clearTimeout(timeout);
  timeout = setTimeout(calculateInterest, 2000);
}


async function calculateInterest() {
  const principal = document.getElementById("principal").value;
  const rate = document.getElementById("rate").value;
  const time = document.getElementById("time").value;

  const result = await fetch(`http://localhost:3000/interest?principal=${principal}&rate=${rate}&time=${time}`);
  const data = await result.text();
  document.getElementById("result").innerHTML = data;
}