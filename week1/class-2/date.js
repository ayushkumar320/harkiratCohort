// In javascript we have many predefined classes like Date, Array, and Object.

const currentDate = new Date();

console.log(currentDate); // Outputs the current date and time
console.log(currentDate.getMonth()); // Outputs the current month (0-11) it is zero indexed

console.log(currentDate.getFullYear()); // Outputs the current year

function dateMethods() {
  const currentDate = new Date();
  console.log("Current Date:", currentDate);

  // Getting various components of the date
  console.log("Date:", currentDate.getDate());
  console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1
  console.log("Year:", currentDate.getFullYear());
  console.log("Hours:", currentDate.getHours());
  console.log("Minutes:", currentDate.getMinutes());
  console.log("Seconds:", currentDate.getSeconds());

  // Setting components of the date
  currentDate.setFullYear(2022);
  console.log("After setFullYear:", currentDate);

  currentDate.setMonth(5); // Setting month to June (zero-indexed)
  console.log("After setMonth:", currentDate);

  // Getting and setting time in milliseconds since 1970
  console.log("Time in milliseconds since 1970:", currentDate.getTime());

  const newDate = new Date(2023, 8, 15); // Creating a new date
  console.log("New Date:", newDate);
}

// Example Usage for Date Methods
dateMethods();

// Usecase of date class

function calculateSum(){
  let a = 0;
  for (let i = 1; i <= 10000000; i++) {
    a += i;
  }
  return a;
}

const beforeTime = new Date();
const beforeTimeInMs = beforeTime.getTime();
calculateSum();   // Calling the function
const afterTime = new Date();
const afterTimeInMs = afterTime.getTime();

console.log("Time taken:", afterTimeInMs - beforeTimeInMs, "ms");