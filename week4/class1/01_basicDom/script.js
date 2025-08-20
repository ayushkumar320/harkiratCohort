function populateDiv() {
  // How to render hello world here
  /*
  const element = document.getElementById('result');
  console.log(element); // it gives the whole div element
  element.innerHTML = "hello world!";
  */

  // Now calculating the result

  const a = document.getElementById("num1").value;
  const b = document.getElementById("num2").value;
  const resultRender = document.getElementById("result");

  resultRender.innerHTML = `The sum of ${a} and ${b} is ${parseInt(a) + parseInt(b)}`;

}