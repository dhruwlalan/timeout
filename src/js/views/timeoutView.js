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
        dom.startBtn.setAttribute('disabled' , 'true');
        dom.resetBtn.setAttribute('disabled' , 'true');
    } else {
        dom.startBtn.removeAttribute('disabled');
        dom.resetBtn.removeAttribute('disabled');
        dom.minutesInput.value = val;
    }
}
export const setSecondsInput = function (val) {
    if (val === 0) {
        dom.secondsInput.value = '';
        dom.startBtn.setAttribute('disabled' , 'true');
        dom.resetBtn.setAttribute('disabled' , 'true');
    } else {
        dom.startBtn.removeAttribute('disabled');
        dom.resetBtn.removeAttribute('disabled');
        dom.secondsInput.value = val;
    }
}

export const start = function () {
    dom.startBtn.setAttribute('disabled' , 'true');
    dom.stopBtn.removeAttribute('disabled');
    dom.pauseBtn.removeAttribute('disabled');
    dom.resetBtn.setAttribute('disabled' , 'true');
}
export const stop = function () {
    dom.startBtn.removeAttribute('disabled');
    dom.stopBtn.setAttribute('disabled' , 'true');
    dom.pauseBtn.setAttribute('disabled' , 'true');
    dom.resetBtn.removeAttribute('disabled');
}
export const pause = function () {
    dom.startBtn.removeAttribute('disabled');
    dom.stopBtn.removeAttribute('disabled');
    dom.pauseBtn.setAttribute('disabled' , 'true');
    dom.resetBtn.setAttribute('disabled' , 'true');
}
export const reset = function () {
    setMinutesInput(0);
    setSecondsInput(0);
    dom.minutesOutput.textContent = '0';
    dom.secondsOutput.textContent = '00';
}

export const updateTimer = function (key , value) {
    if (key === 'minutes') {
        dom.minutesOutput.textContent = value;
    }
    if (key === 'seconds') {
        if (value === 0) {
            dom.secondsOutput.textContent = '00';
        } else {
            dom.secondsOutput.textContent = value;
        }
    }
}

export const init = function () {
    dom.startBtn.setAttribute('disabled' , 'true');
    dom.stopBtn.setAttribute('disabled' , 'true');
    dom.pauseBtn.setAttribute('disabled' , 'true');
    dom.resetBtn.setAttribute('disabled' , 'true');
}