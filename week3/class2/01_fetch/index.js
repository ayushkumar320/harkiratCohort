function getAnimalData() {
  const response = fetch("https://fakerapi.it/api/v1/persons"); 
  console.log(response);  // This returns a Promise whose initial state is pending

  // Promisified syntax
  response.then(function(res){
    const json = res.json();
    console.log(json); // It again returns a Promise

    // Again promisified syntax
    json.then(function(data){
      console.log(data); // This will log the actual data once the Promise resolves
    });
  });
}

// The above can be written in async await syntax

async function getAnimalDataAsync() {
  const response = await fetch("https://fakerapi.it/api/v1/persons"); // 1st .then()
  const finalData = await response.json();  // 2nd .then()
  console.log(finalData); 
}