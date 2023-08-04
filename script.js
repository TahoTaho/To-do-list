const addTaskButton = document.getElementById('add-task');
const taskContainer = document.querySelector('div.task-container');
addTaskButton.addEventListener('click', newTask);

function newTask() {
    const task = document.createElement('div');
    task.className = 'task';

    const taskDescription = document.createElement('p');
    taskDescription.className = 'task-description';
    taskDescription.textContent = 'Jojos';

    const taskDoneButton = document.createElement('button');
    taskDoneButton.className = 'task-done';
    taskDoneButton.textContent = 'Done';

    const removeTaskButton = document.createElement('button');
    removeTaskButton.className = 'remove-task';
    removeTaskButton.textContent = 'Remove';

    task.append(taskDescription);
    task.append(taskDoneButton);
    task.append(removeTaskButton);
    taskContainer.append(task);
}