// stopwatch.js
let stopwatchInterval;
let stopwatchRunning = false;
let elapsedTime = 0;

document.getElementById('startStop').addEventListener('click', () => {
    if (stopwatchRunning) {
        clearInterval(stopwatchInterval);
        stopwatchRunning = false;
        document.getElementById('startStop').textContent = 'Start';
    } else {
        stopwatchRunning = true;
        document.getElementById('startStop').textContent = 'Stop';
        const startTime = Date.now() - elapsedTime;
        stopwatchInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            document.getElementById('stopwatch').textContent = new Date(elapsedTime).toISOString().substr(11, 8);
        }, 1000);
    }
});

document.getElementById('reset').addEventListener('click', () => {
    clearInterval(stopwatchInterval);
    stopwatchRunning = false;
    elapsedTime = 0;
    document.getElementById('stopwatch').textContent = '00:00:00';
    document.getElementById('startStop').textContent = 'Start';
});
