import dom from './dom.js';

export const getMinutesInput = function () {
    return Number(dom.minutesInput.value);
}
export const getSecondsInput = function () {
    return Number(dom.secondsInput.value);
}
export const setMinutesInput = function (val) {
    if (val === 0) {
        dom.minutesInput.value = '';
    } else {
        dom.minutesInput.value = val;
    }
}
export const setSecondsInput = function (val) {
    if (val === 0) {
        dom.secondsInput.value = '';
    } else {
        dom.minutesInput.value = val;
    }
}
export const reset = function () {
    dom.minutesInput.value = '';
    dom.secondsInput.value = '';
    dom.minutesOutput.textContent = '0';
    dom.secondsOutput.textContent = '00';
}

export const updateTimer = function (key , value) {
    if (key === 'minutes') {
        dom.minutesOutput.textContent = value;
    }
    if (key === 'seconds') {
        dom.secondsOutput.textContent = value;
    }
}