let tasksDb = [];



function addTask() {
    const taskInput = document.getElementById('todo-input');
    const taskDate = document.getElementById('todo-date');

    if (validateInput(taskInput.value, taskDate.value)) {
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
    taskList.innerHTML = '';
    
    tasksDb.forEach((taskDbj, index) => {
        taskList.innerHTML += `<li>${taskDbj.task} - ${taskDbj.date}</li>`; 
    }); 

}

    
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
    


    
 
