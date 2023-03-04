const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

addButton.addEventListener("click", () => {
  const todoItem = document.createElement("li");
  const todoText = document.createTextNode(todoInput.value);
  todoItem.appendChild(todoText);
  todoList.appendChild(todoItem);
  todoInput.value = "";
});

todoList.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
  }
});
