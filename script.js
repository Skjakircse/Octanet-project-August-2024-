
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', addTask);
    taskList.addEventListener('click', handleTaskActions);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <button class="complete-btn">✔</button>
            <button class="edit-btn">✎</button>
            <button class="delete-btn">✘</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }

    function handleTaskActions(event) {
        if (event.target.classList.contains('complete-btn')) {
            const task = event.target.parentElement;
            task.querySelector('.task-text').classList.toggle('completed');
        }

        if (event.target.classList.contains('edit-btn')) {
            const task = event.target.parentElement;
            const taskText = task.querySelector('.task-text');
            const newText = prompt('Edit your task:', taskText.textContent);
            if (newText !== null) {
                taskText.textContent = newText;
            }
        }

        if (event.target.classList.contains('delete-btn')) {
            const task = event.target.parentElement;
            taskList.removeChild(task);
        }
    }
});
