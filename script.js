const addTaskButton = document.getElementById('add-task');
const taskContainer = document.querySelector('div.task-container');
const inputField = document.querySelector('input.text-field');

addTaskButton.addEventListener('click', newTask);

function newTask() {
    console.log(inputField.value);
    if (inputField.value != '') {
        const task = document.createElement('div');
        task.className = 'task';
    
        const taskDescription = document.createElement('p');
        taskDescription.className = 'task-description';
        taskDescription.textContent = inputField.value;
        
        const taskDoneButton = document.createElement('button');
        taskDoneButton.className = 'task-done';
        taskDoneButton.textContent = 'Done';

        const removeTaskButton = document.createElement('button');
        removeTaskButton.className = 'remove-task';
        removeTaskButton.textContent = 'Remove';

        inputField.value = '';
        
        task.append(taskDescription);
        task.append(taskDoneButton);
        task.append(removeTaskButton);
        taskContainer.append(task);
    }
    else {
        return console.log('Input field is empty');
    }
    
}