// alarm.js
let alarmTimeout;

document.getElementById('setAlarm').addEventListener('click', () => {
    const alarmTime = document.getElementById('alarmTime').value;
    if (!alarmTime) {
        alert('Please set a valid time for the alarm.');
        return;
    }

    const alarmDate = new Date();
    const [hours, minutes] = alarmTime.split(':');
    alarmDate.setHours(hours, minutes, 0, 0);

    const now = new Date();
    const timeToAlarm = alarmDate.getTime() - now.getTime();

    if (timeToAlarm > 0) {
        document.getElementById('alarmStatus').textContent = `Alarm set for ${alarmTime}`;
        alarmTimeout = setTimeout(() => {
            alert('Wake up! Your alarm is ringing.');
            document.getElementById('alarmStatus').textContent = '';
        }, timeToAlarm);
    } else {
        alert('The time set for the alarm has already passed today.');
    }
});
