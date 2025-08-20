function populateDiv() {
  
  const a = document.getElementById("num1").value;
  const b = document.getElementById("num2").value;
  // const resultRender = document.getElementById("result"); We can not use this

  // To hit backend endpoint, we can use fetch which is an async call
  
  /*
  
  const res = fetch(`http://localhost:3000/sum?a=${a}&b=${b}`);
  console.log(res); // This will log a Promise object

  */
  
  // The fetch is working, and backend route is hitting

  // Now we need to extract the response and render it, as it is a promise we will handle it

  /*
  res.then(function(response){
    console.log(response);
    return response.text();
  }).then(function(data){
    console.log(data);
  });
  */
  // Cleaner way (to avoid using 2 .then() due to fetch properties we can use async await syntax)

  async function getData() {
    const response = await fetch(`http://localhost:3000/sum?a=${a}&b=${b}`);
    const data = await response.text();
    // The .text() method reads the response body as text
    console.log(data);
    
    // Rendering the result

    document.getElementById("result").innerText = data;

  }
  getData();

  // Note - as this is a async function inside a function, it could be made better by simply making the outer function as async function only, we can do that too.
}