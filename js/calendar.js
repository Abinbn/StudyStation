// calendar.js
function generateCalendar() {
    const calendar = document.getElementById('calendar');
    const now = new Date();
    const month = now.getMonth();
    const year = now.getFullYear();
    const today = now.getDate();

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let calendarHTML = '';
    for (let i = 0; i < firstDay; i++) {
        calendarHTML += '<div></div>';
    }
    for (let day = 1; day <= daysInMonth; day++) {
        if (day === today) {
            calendarHTML += `<div class="p-2 bg-blue-500 text-white text-center rounded">${day}</div>`;
        } else {
            calendarHTML += `<div class="p-2 bg-gray-200 text-center rounded">${day}</div>`;
        }
    }

    calendar.innerHTML = calendarHTML;
}

generateCalendar();
