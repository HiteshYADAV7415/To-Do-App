const taskInput = document.getElementById("task");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = [];

function addTask() {
	const task = taskInput.value.trim();

	if (!task) {
		alert("Please enter a task.");
		return;
	}

	tasks.push(task);
	displayTasks();
	taskInput.value = "";
}

function displayTasks() {
	taskList.innerHTML = "";

	for (let i = 0; i < tasks.length; i++) {
		const li = document.createElement("li");
		li.innerHTML = `<span>${tasks[i]}</span>
						<button onclick="updateTask(${i})">Update</button>
						<button onclick="removeTask(${i})">Remove</button>`;
		taskList.appendChild(li);
	}
}

function updateTask(index) {
	const newTask = prompt("Enter the new task:");

	if (!newTask) {
		alert("Please enter a new task.");
		return;
	}

	tasks[index] = newTask;
	displayTasks();
}

function removeTask(index) {
	tasks.splice(index, 1);
	displayTasks();
}

addBtn.addEventListener("click", addTask);
