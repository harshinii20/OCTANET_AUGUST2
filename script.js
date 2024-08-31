document.getElementById('addTaskBtn').addEventListener('click', function() {
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value.trim();

    if (taskText !== "") {
        let taskList = document.getElementById('taskList');
        let li = document.createElement('li');
        li.innerHTML = `${taskText} <span>&times;</span>`;
        
        li.querySelector('span').addEventListener('click', function() {
            li.remove();
        });

        taskList.appendChild(li);
        taskInput.value = "";
    }
});

document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('addTaskBtn').click();
    }
});
