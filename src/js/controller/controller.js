import dom from '../views/dom.js';
import Timeout from '../models/Timeout.js';
import * as timeoutView from '../views/timeoutView.js';
import * as theme from '../views/theme.js';

let minutes = 0;
let seconds = 0;

const updateMinutes = () => {
    let min = timeoutView.getMinutesInput();
    min = min > 300 ? 300 : Math.floor(min);
    min = min < 0 ? 0 : Math.floor(min);
    timeoutView.setMinutesInput(min);
    Timeout.minutes = min;
    minutes = min;
    timeoutView.updateTimer('minutes' , min);
}
const updateSeconds = () => {
    let sec = timeoutView.getSecondsInput();
    sec = sec > 59 ? 59 : Math.floor(sec);
    sec = sec < 0 ? 0 : Math.floor(sec);
    timeoutView.setSecondsInput(sec);
    Timeout.seconds = sec;
    seconds = sec;
    timeoutView.updateTimer('seconds' , sec);
}
const startTimer = () => {
    timeoutView.start();
    Timeout.timerId = setInterval(() => {
        seconds--;
        if (seconds < 0) {
            if (minutes === 0) {
                return stopTimer();
            }
            seconds = 59;
            minutes--;
        }
        timeoutView.updateTimer('minutes' , minutes);
        timeoutView.updateTimer('seconds' , seconds);
    } , 1000);
}
const stopTimer = () => {
    timeoutView.stop();
    clearInterval(Timeout.timerId);
    console.log(Timeout);
    minutes = Timeout.minutes;
    seconds = Timeout.seconds;
    timeoutView.updateTimer('minutes' , Timeout.minutes);
    timeoutView.updateTimer('seconds' , Timeout.seconds);
}
const pauseTimer = () => {
    timeoutView.pause();
    clearInterval(Timeout.timerId);
}
const resetTimer = () => {
    Timeout.minutes = 0;
    Timeout.seconds = 0;
    Timeout.timerId = 0;
    minutes = 0;
    seconds = 0;
    timeoutView.reset();
}

const setupEventListeners = function () {
    dom.themeBtn.addEventListener('click' , theme.changeTheme);
    dom.minutesInput.addEventListener('keyup' , updateMinutes);
    dom.minutesInput.addEventListener('change' , updateMinutes);
    dom.secondsInput.addEventListener('keyup' , updateSeconds);
    dom.secondsInput.addEventListener('change' , updateSeconds);
    dom.startBtn.addEventListener('click' , startTimer);
    dom.stopBtn.addEventListener('click' , stopTimer);
    dom.pauseBtn.addEventListener('click' , pauseTimer);
    dom.resetBtn.addEventListener('click' , resetTimer);
}
export default function () {
    timeoutView.init();
    const currentTheme = localStorage.getItem('timeoutTheme');
    if (currentTheme) {
        theme.updateTheme(currentTheme);    
    } else {
        localStorage.setItem('timeoutTheme' , 'light');
        theme.updateTheme('light');
    }
    setupEventListeners();
}