document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const pendingList = document.getElementById('pending-list');
    const completedList = document.getElementById('completed-list');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText, false);
            taskInput.value = '';
        }
    });

    function addTask(text, isCompleted) {
        const task = document.createElement('li');
        task.textContent = text;

        const completeBtn = document.createElement('button');
        completeBtn.textContent = isCompleted ? 'Undo' : 'Complete';
        completeBtn.classList.add('complete-btn');
        completeBtn.addEventListener('click', () => {
            if (isCompleted) {
                pendingList.appendChild(task);
                task.classList.remove('completed');
                completeBtn.textContent = 'Complete';
            } else {
                completedList.appendChild(task);
                task.classList.add('completed');
                completeBtn.textContent = 'Undo';
            }
            isCompleted = !isCompleted;
        });

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('edit-btn');
        editBtn.addEventListener('click', () => {
            const newText = prompt('Edit task:', text);
            if (newText) {
                task.textContent = newText;
                task.appendChild(completeBtn);
                task.appendChild(editBtn);
                task.appendChild(deleteBtn);
            }
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
            task.remove();
        });

        task.appendChild(completeBtn);
        task.appendChild(editBtn);
        task.appendChild(deleteBtn);

        if (isCompleted) {
            task.classList.add('completed');
            completedList.appendChild(task);
        } else {
            pendingList.appendChild(task);
        }
    }
});
