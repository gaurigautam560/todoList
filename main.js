window.print = console.log.bind(console);

let todoInput = document.querySelector(".todoInput"); //capture
let todoForm = document.querySelector(".todoForm");
let todoList = document.querySelector(".todoList");

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let todoText = todoInput.value;
  if (todoText == "") {
    return;
  }
  todoInput.value = "";
  let li = document.createElement("li");
  li.textContent = todoText;
  todoList.append(li);
});
