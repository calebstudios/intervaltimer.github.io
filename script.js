let currentInterval;
let isWorkoutPhase = true;
let workoutTime, restTime;

document.getElementById('start-button').addEventListener('click', startTimer);
document.getElementById('pause-button').addEventListener('click', pauseTimer);
document.getElementById('reset-button').addEventListener('click', resetTimer);

function startTimer() {
    console.log("Start Timer Clicked");
    clearInterval(currentInterval);

    workoutTime = parseInt(document.getElementById('workout-input').value) || 30;
    restTime = parseInt(document.getElementById('rest-input').value) || 10;
    isWorkoutPhase = true;

    currentInterval = setInterval(() => updateTimer(), 1000);
}

function pauseTimer() {
    console.log("Pause Timer Clicked");
    clearInterval(currentInterval);
}

function resetTimer() {
    console.log("Reset Timer Clicked");
    clearInterval(currentInterval);
    workoutTime = parseInt(document.getElementById('workout-input').value) || 30;
    restTime = parseInt(document.getElementById('rest-input').value) || 10;
    isWorkoutPhase = true;
    document.getElementById('current-status').textContent = 'Ready';
}

function updateTimer() {
    let statusDisplay = document.getElementById('current-status');

    if (isWorkoutPhase) {
        if (workoutTime > 0) {
            workoutTime--;
            statusDisplay.textContent = 'Workout: ' + workoutTime + ' seconds';
        } else {
            isWorkoutPhase = false;
            workoutTime = parseInt(document.getElementById('workout-input').value) || 30;
        }
    } else {
        if (restTime > 0) {
            restTime--;
            statusDisplay.textContent = 'Rest: ' + restTime + ' seconds';
        } else {
            isWorkoutPhase = true;
            restTime = parseInt(document.getElementById('rest-input').value) || 10;
        }
    }
}
