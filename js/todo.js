// todo.js
document.getElementById('addTodo').addEventListener('click', () => {
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim();

    if (todoText) {
        const todoList = document.getElementById('todoList');
        const li = document.createElement('li');
        li.className = 'flex justify-between items-center bg-gray-200 p-2 rounded';
        li.innerHTML = `${todoText} <button class="deleteTodo text-red-500">Delete</button>`;
        todoList.appendChild(li);

        li.querySelector('.deleteTodo').addEventListener('click', () => {
            todoList.removeChild(li);
        });

        todoInput.value = '';
    }
});
