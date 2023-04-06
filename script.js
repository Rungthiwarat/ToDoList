// Get references to the relevant HTML elements
const inputBox = document.getElementById("inputBox");
const addButton = document.getElementById("new-Task");
const todoList = document.getElementById("todo-list");

// Add event listener to the "Add Task" button
addButton.addEventListener("click", function () {
  const taskText = inputBox.value;
  if (taskText.trim() === "") {
    alert("Please enter a task");
    return;
  }
  const li = document.createElement("li");
  const taskTextNode = document.createTextNode(taskText);
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.style.padding = "10px";
  deleteButton.style.backgroundColor = "blueviolet";
  deleteButton.style.border = "none";
  deleteButton.style.cursor = "pointer";
  deleteButton.style.color = "white";
  deleteButton.style.marginLeft = "50px";
  deleteButton.style.fontWeight = "bold";
  deleteButton.addEventListener("click", function () {
    li.remove();
  });
  deleteButton.addEventListener("mouseover", function () {
    deleteButton.style.color = "red";
    deleteButton.style.fontSize = "20px";
  });
  deleteButton.addEventListener("mouseout", function () {
    deleteButton.style.color = "white";
    deleteButton.style.fontSize = "small";
  });
  li.appendChild(taskTextNode);
  li.appendChild(deleteButton);
  todoList.appendChild(li);
  inputBox.value = "";
});

// Add event listener to each task's delete button in the list
todoList.addEventListener("click", function (event) {
  const target = event.target;
  if (target.tagName === "BUTTON") {
    const li = target.parentNode;
    li.remove();
  }
});
