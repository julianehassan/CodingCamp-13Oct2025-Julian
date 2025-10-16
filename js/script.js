let taskDb = [];



function addTask() {
    const taskinput = document.getElementById('todo-input');
    const tasDate = document.getElementById('todo-date');

    if (validateInput(taskinput.value, taskDate.value)) {
         const newTask = {
        task: taskInput.value,
        date: taskDate.value, 

    }
    tasksDb.push(newTask);
    
    renderTasks();
  }
}

 function renderTasks() {
    const taskList = document.getElementById('task-list');
    tasklist.innerHTML = 'No taks added yet';
    
    taskDb.forEach((taskDbj, index) => {
        taskList.innerHTML += <li>${taskDbj.task} - ${taskDbj.date}; 
    ; 

    
    function deleteAllTasks() {
        taskDb = [];
        renderTasks ();
    }

    function filterTasks() { }

    function validateInput(task, date) {
        if (task.trim() === '' || date.trim() == '') {
        alert('Please enter both task and due date.');
        return false;    
        }
        return true;
    }
    


    
 }
