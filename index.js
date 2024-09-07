const taskForm = document.getElementById('enter-new-task');
const inputNewTask = document.getElementById('input-task');
const addTaskBtn = document.getElementById('submit');
const taskList = document.getElementById('tasks');
let storeToDoList = [];
let list = [];

function addTask() {
    list.push(inputNewTask.value);
    renderList();
}

function renderList() {
    let originalTask;
    let indexOfOriginalTask;

    taskList.innerHTML = '';
    for(let i = 0; i < list.length; i++) {
        const newTask = document.createElement('div');
        newTask.setAttribute('class', 'task');

        const taskContentContainer = document.createElement('div');
        taskContentContainer.setAttribute('class', 'task-content');
        const readOnlyTask = document.createElement('input');
        readOnlyTask.setAttribute('class', 'text');
        readOnlyTask.readOnly = true;
        readOnlyTask.type = 'text';
        readOnlyTask.setAttribute('value', list[i]);
        taskContentContainer.append(readOnlyTask);
        newTask.append(taskContentContainer);

        const btnContainer = document.createElement('div');
        btnContainer.setAttribute('class', 'btn-container');

        const editBtn = document.createElement('button');
        editBtn.addEventListener('click', function() {
            // if (editBtn.textContent === 'EDIT') {
            if (editBtn.innerHTML === '<i class="fa-solid fa-pen"></i>') {
                readOnlyTask.readOnly = false
                // editBtn.textContent = 'SAVE';
                editBtn.innerHTML = '<i class="fa-solid fa-floppy-disk"></i>';
                originalTask = readOnlyTask.value;
                indexOfOriginalTask = list.indexOf(originalTask);
                readOnlyTask.focus();

        
            } else {
                readOnlyTask.readOnly = true;
                // editBtn.textContent = 'EDIT';
                editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
                list[indexOfOriginalTask] = readOnlyTask.value;
                saveToDoList();
                console.log(list);
            }
        })
        // editBtn.textContent = 'EDIT';
        editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';

        const deleteBtn = document.createElement('button');
        deleteBtn.addEventListener('click', function() {
            let childrenArray = Array.from(taskList.children);
            console.log(childrenArray);
            list.splice(childrenArray.indexOf(taskList.removeChild(newTask)), 1);
            saveToDoList();
            console.log(list);
        })
        // deleteBtn.textContent = 'DELETE';
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

        btnContainer.append(editBtn);
        btnContainer.append(deleteBtn);
        newTask.append(btnContainer);
        taskList.append(newTask);
        inputNewTask.value = '';
    }
}

taskForm.addEventListener('submit', function(e) {
    e.preventDefault();
    addTask();
    saveToDoList();
})

function saveToDoList() {
    localStorage.setItem('savedToDoList', JSON.stringify(list));
    list = JSON.parse(localStorage.getItem('savedToDoList'));
}

function getToDoList() {
    list = JSON.parse(localStorage.getItem('savedToDoList'));
}

if (localStorage.getItem('savedToDoList') !== null) {
    getToDoList();
    renderList();
}