const root = document.querySelector(".root");

function render(element) {
  root.appendChild(element);
}

const element = document.createElement("a");
element.href = "https://www.google.com";
element.textContent = "Go to Google";
element.setAttribute("target", "_blank");
render(element);