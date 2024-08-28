// timer.js
let timerInterval;
let timerRunning = false;
let timerTime = 0;

document.getElementById('startTimer').addEventListener('click', () => {
    if (!timerRunning) {
        timerRunning = true;
        const startTime = Date.now() - timerTime;
        timerInterval = setInterval(() => {
            timerTime = Date.now() - startTime;
            document.getElementById('timer').textContent = new Date(timerTime).toISOString().substr(14, 5);
        }, 1000);
    }
});

document.getElementById('stopTimer').addEventListener('click', () => {
    clearInterval(timerInterval);
    timerRunning = false;
});
