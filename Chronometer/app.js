let seconds = 00;
let tens =  00;
let startTimer = document.getElementById('start')
let stopTimer = document.getElementById('stop')
let resetTimer = document.getElementById("reset")
let outputSeconds = document.getElementById('second')
let outputTens = document.getElementById('tens')
let Interval;

startTimer.addEventListener('click', () => {
    clearInterval(Interval);
    Interval = setInterval(startTime, 10);
});

stopTimer.addEventListener('click', () => {
    clearInterval(Interval);
});

resetTimer.addEventListener('click', () => {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    outputSeconds.innerHTML = seconds;
    outputTens.innerHTML = tens;
})

function startTime() {
    tens++;
    if(tens <= 9) {
        outputTens.innerHTML = "0" + tens;
        }
    if(tens > 9) {
        outputTens.innerHTML = tens;
    }
    if(tens > 99) {
        seconds++;
        outputSeconds.innerHTML = "0" + seconds;
        tens = 0;
        outputTens.innerHTML = "0" + tens; 
    }
    if(seconds > 9) {
        outputSeconds.innerHTML = seconds;
    }
}


