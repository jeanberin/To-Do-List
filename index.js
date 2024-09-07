const taskForm = document.getElementById('enter-new-task');
const inputNewTask = document.getElementById('input-task');
const addTaskBtn = document.getElementById('submit');
const taskList = document.getElementById('tasks');
let storeToDoList = [];
let list = [];
let colorList = [];
let categoryList = ['pink', 'lightblue', 'dandelion'];

function addTask() {
    if (inputNewTask.value === '') {
        alert('Please enter task.');
    } else {
        list.push(inputNewTask.value);
        // selectCategory();
        renderList();
    }
}

function selectCategory() {
    let selectedCategory = categoryList[generateRandomNumber(0,2)];
    colorList.push(selectedCategory);
    console.log(colorList);
}

function renderList() {
    let originalTask;
    let indexOfOriginalTask;

    taskList.innerHTML = '';
    for(let i = 0; i < list.length; i++) {
        const newTask = document.createElement('div');
        newTask.setAttribute('class', 'task');
        





        const categoryBtn = document.createElement('div');
        categoryBtn.setAttribute('class', 'category-btn');
        // categoryBtn.classList.add(`${colorList[i]}`);
        // FOR ADDING COLOR PROPERTY OF CATEGORY-BTN
        categoryBtn.classList.add(`${categoryList[generateRandomNumber(0,2)]}`);
        




        const taskContentContainer = document.createElement('div');
        taskContentContainer.setAttribute('class', 'task-content');
        const readOnlyTask = document.createElement('input');
        readOnlyTask.setAttribute('class', 'text');
        readOnlyTask.readOnly = true;
        readOnlyTask.type = 'text';
        readOnlyTask.setAttribute('value', list[i]);





        taskContentContainer.append(categoryBtn);






        taskContentContainer.append(readOnlyTask);
        newTask.append(taskContentContainer);

        const btnContainer = document.createElement('div');
        btnContainer.setAttribute('class', 'btn-container');

        const editBtn = document.createElement('button');
        editBtn.addEventListener('click', function() {
            if (editBtn.innerHTML === '<i class="fa-solid fa-pen"></i>') {
                readOnlyTask.readOnly = false
                editBtn.innerHTML = '<i class="fa-solid fa-floppy-disk"></i>';
                originalTask = readOnlyTask.value;
                indexOfOriginalTask = list.indexOf(originalTask);
                readOnlyTask.focus();

        
            } else {
                readOnlyTask.readOnly = true;
                editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
                list[indexOfOriginalTask] = readOnlyTask.value;
                saveToDoList();
                console.log(list);
            }
        })
        editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';

        const deleteBtn = document.createElement('button');
        deleteBtn.addEventListener('click', function() {
            let childrenArray = Array.from(taskList.children);
            console.log(childrenArray);
            list.splice(childrenArray.indexOf(taskList.removeChild(newTask)), 1);



            // colorList.splice(childrenArray.indexOf(taskList.removeChild(newTask)), 1)



            saveToDoList();
            console.log(list);
        })
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
    localStorage.setItem('colorList', JSON.stringify(colorList))
    list = JSON.parse(localStorage.getItem('savedToDoList'));
    colorList = JSON.parse(localStorage.getItem('colorList'));
}

function getToDoList() {
    list = JSON.parse(localStorage.getItem('savedToDoList'));
    colorList = JSON.parse(localStorage.getItem('colorList'));
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// if (localStorage.getItem('savedToDoList')) {
//     getToDoList();
//     renderList();
// }
if (localStorage.getItem('savedToDoList') !== null && localStorage.getItem('colorList')) {
    getToDoList();
    renderList();
}