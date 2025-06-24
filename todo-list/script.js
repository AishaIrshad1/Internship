let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    taskList.innerHTML += `
      <li>
        ${task}
        <button onclick="deleteTask(${index})">Delete</button>
      </li>`;
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const input = document.getElementById("taskInput");
  if (input.value.trim()) {
    tasks.push(input.value.trim());
    input.value = "";
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

renderTasks();
