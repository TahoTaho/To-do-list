const addTaskButton = document.getElementById('add-task');
const taskInProgress = document.querySelector('div.task-in-progress');
const taskComplete = document.querySelector('div.task-completed');
const inputField = document.querySelector('input.text-field');

addTaskButton.addEventListener('click', newTask);

function newTask() {
    if (inputField.value != '') {
        const task = document.createElement('div');
        task.className = 'task';
    
        const taskDescription = document.createElement('p');
        taskDescription.className = 'task-description';
        taskDescription.textContent = inputField.value;
        
        const taskDoneButton = document.createElement('button');
        taskDoneButton.className = 'task-done-button';
        taskDoneButton.textContent = 'Done';
        taskDoneButton.addEventListener('click', () => {
            completed(task, taskDoneButton, taskRemoveButton);
        });

        const taskRemoveButton = document.createElement('button');
        taskRemoveButton.className = 'task-remove-button';
        taskRemoveButton.textContent = 'Remove';
        taskRemoveButton.addEventListener('click', () => {
            remove(task);
        });

        const clearTextField = inputField.value = '';
        
        task.append(taskDescription);
        task.append(taskDoneButton);
        task.append(taskRemoveButton);

        taskInProgress.append(task);
    }
    else {
        return console.log('Input field is empty');
    }
}

function completed(element, button1, button2) {
    element.removeChild(button1);
    element.removeChild(button2);
    taskComplete.append(element);
} 

function remove(component) {
    taskInProgress.removeChild(component);
}