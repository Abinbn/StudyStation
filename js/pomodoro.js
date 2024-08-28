// pomodoro.js
let pomodoroInterval;
let pomodoroTime = 1500; // 25 minutes in seconds
let pomodoroRunning = false;

function updatePomodoroDisplay() {
    const minutes = Math.floor(pomodoroTime / 60);
    const seconds = pomodoroTime % 60;
    document.getElementById('pomodoroTimer').textContent = 
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

document.getElementById('startPomodoro').addEventListener('click', () => {
    if (!pomodoroRunning) {
        pomodoroRunning = true;
        pomodoroInterval = setInterval(() => {
            if (pomodoroTime > 0) {
                pomodoroTime--;
                updatePomodoroDisplay();
            } else {
                clearInterval(pomodoroInterval);
                alert("Pomodoro session complete! Take a break.");
            }
        }, 1000);
    }
});

document.getElementById('resetPomodoro').addEventListener('click', () => {
    clearInterval(pomodoroInterval);
    pomodoroRunning = false;
    pomodoroTime = 1500;
    updatePomodoroDisplay();
});

updatePomodoroDisplay();
