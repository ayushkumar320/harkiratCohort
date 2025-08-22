function addTodo() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  
  /*
  One way : The ugly way

  const tasks = document.querySelector(".tasks");
  tasks.innerHTML = `
    <div class="task">
      <h3>${title}</h3>
      <p>${description}</p>
      <button>Mark as Done</button>
    </div>
  `
  */

  // Better way

  const outerDiv = document.createElement("div");
  outerDiv.innerHTML = title;
  document.getElementById("container").appendChild(outerDiv);

  // Refer cleanerWay.html for a more organized approach

}