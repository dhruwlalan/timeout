import dom from './views/dom.js';
import changeTheme from './views/changeTheme.js';
import * as timeoutView from './views/timeoutView.js';
import Timeout from './models/Timeout.js';

const updateMinutes = () => {
	let min = timeoutView.getMinutesInput();
	min = min > 300 ? 300 : Math.floor(min);
	min = min < 0 ? 0 : Math.floor(min);
	timeoutView.setMinutesInput(min);
	Timeout.minutes = min;
	timeoutView.updateTimer('minutes' , min);
}
const updateSeconds = () => {
	let sec = timeoutView.getSecondsInput();
	sec = sec > 59 ? 59 : Math.floor(sec);
	sec = sec < 0 ? 0 : Math.floor(sec);
	timeoutView.setSecondsInput(sec);
	Timeout.seconds = sec;
	timeoutView.updateTimer('seconds' , sec);
}
const startTimer = () => {
	
}
const stopTimer = () => {
	
}
const pauseTimer = () => {
	
}
const resetTimer = () => {
	Timeout.minutes = 0;
	Timeout.seconds = 0;
	Timeout.timerId = 0;
	timeoutView.reset();
}

const setupEventListeners = function () {
	dom.themeBtn.addEventListener('click' , changeTheme);
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
	setupEventListeners();
}


// startTimer = function (seconds , minutes) {
// 	    timerId = setInterval(function() {
// 	        seconds--;
// 	        if (seconds < 0) {
// 	            if (minutes == 0) {
// 	                return stopTimer();
// 	            }
// 	            seconds = 59;
// 	            minutes--;
// 	        }
// 	        updateValue("minutes", this.minutes);
// 	        updateValue("seconds", this.seconds);
// 	    }, 1000);
// }
// stopTimer = function () {
//     clearInterval(timerId);
//     if (seconds == 0) {
//         seconds = "0" + seconds;
//     }
//     updateValue("minutes", minutes);
//     updateValue("seconds", seconds);
// }
// pauseTimer = function () {
//     clearInterval(timerId);
// }