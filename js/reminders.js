// reminders.js
document.getElementById('addReminder').addEventListener('click', () => {
    const reminderInput = document.getElementById('reminderInput');
    const reminderText = reminderInput.value.trim();

    if (reminderText) {
        const reminderList = document.getElementById('reminderList');
        const li = document.createElement('li');
        li.className = 'flex justify-between items-center bg-gray-200 p-2 rounded';
        li.innerHTML = `${reminderText} <button class="deleteReminder text-red-500">Delete</button>`;
        reminderList.appendChild(li);

        li.querySelector('.deleteReminder').addEventListener('click', () => {
            reminderList.removeChild(li);
        });

        reminderInput.value = '';
    }
});
