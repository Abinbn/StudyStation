// clock.js
function updateClock() {
    const clockElement = document.getElementById('clock');
    const dateElement = document.getElementById('date');

    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const dateString = now.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    clockElement.textContent = timeString;
    dateElement.textContent = dateString;
}

setInterval(updateClock, 1000);
updateClock();
