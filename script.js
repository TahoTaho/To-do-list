const addTaskButton = document.getElementById('add-task');
const taskContainer = document.querySelector('div.task-container');
addTaskButton.addEventListener('click', newTask);

function newTask() {
    const task = document.createElement('div');
    task.className = 'task';
    taskContainer.append(task);
}