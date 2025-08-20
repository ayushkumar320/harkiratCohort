// Creating a debounceing method
let timeout;
function debouncePopulateDiv() {
  // delay the call to popolateDiv utill i have not waited for 1000ms
  // and I've been called atleast once
  // clear the timeout if the function is called again, or whenever we change the input
  clearTimeout(timeout);
  timeout = setTimeout(function() {
    populateDiv();
  }, 1000);

}
// This function is called whenever the user types in the input field.
// It ensures that the `populateDiv` function (which makes an API call) is not called too frequently.
// Instead, it waits for a specified delay (1000ms in this case) after the last input before executing `populateDiv`.
// If the user types again within that delay, the previous timer is cleared, and a new one is set.
// This prevents unnecessary API calls and improves performance, especially for fast typers.



async function populateDiv() {
  
  const a = document.getElementById("num1").value;
  const b = document.getElementById("num2").value;
  
  const response = await fetch(`http://localhost:3000/sum?a=${a}&b=${b}`);
  const data = await response.text();
    
  console.log(data)

  document.getElementById("result").innerText = data;

}