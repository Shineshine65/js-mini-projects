let interval;
let milliseconds = 0;

const timeDisplay = document.getElementById("time");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

function updateTime() {
    let totalSeconds = Math.floor(milliseconds / 100);
    let hrs = Math.floor(totalSeconds / 3600);
    let mins = Math.floor((totalSeconds % 3600) / 60);
    let secs = totalSeconds % 60;
    let cs = milliseconds % 100;  // centiseconds (00–99)

    timeDisplay.textContent =
        `${String(hrs).padStart(2,"0")}:` +
        `${String(mins).padStart(2,"0")}:` +
        `${String(secs).padStart(2,"0")}:` +
        `${String(cs).padStart(2,"0")}`;
}

startBtn.addEventListener("click", () => {
    clearInterval(interval);
    interval = setInterval(() => {
        milliseconds++;
        updateTime();
    }, 10); // update every 0.01 second
});

stopBtn.addEventListener("click", () => {
    clearInterval(interval);
});

resetBtn.addEventListener("click", () => {
    clearInterval(interval);
    milliseconds = 0;
    updateTime();
});

// Initialize display
updateTime();
