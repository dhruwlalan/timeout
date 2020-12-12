import dom from './dom';

export const getMinutesInput = function () {
   return Number(dom.minutesInput.value);
};
export const getSecondsInput = function () {
   return Number(dom.secondsInput.value);
};
export const start = function () {
   dom.startBtn.setAttribute('disabled', 'true');
   dom.stopBtn.removeAttribute('disabled');
   dom.pauseBtn.removeAttribute('disabled');
   dom.resetBtn.setAttribute('disabled', 'true');
   dom.minutesInput.setAttribute('disabled', 'true');
   dom.secondsInput.setAttribute('disabled', 'true');
};
export const stop = function () {
   dom.startBtn.removeAttribute('disabled');
   dom.stopBtn.setAttribute('disabled', 'true');
   dom.pauseBtn.setAttribute('disabled', 'true');
   dom.resetBtn.removeAttribute('disabled');
   dom.minutesInput.removeAttribute('disabled');
   dom.secondsInput.removeAttribute('disabled');
};
export const pause = function () {
   dom.startBtn.removeAttribute('disabled');
   dom.stopBtn.removeAttribute('disabled');
   dom.pauseBtn.setAttribute('disabled', 'true');
   dom.resetBtn.setAttribute('disabled', 'true');
};
const resetButtons = () => {
   if (getMinutesInput() === 0 && getSecondsInput() === 0) {
      dom.startBtn.setAttribute('disabled', 'true');
      dom.resetBtn.setAttribute('disabled', 'true');
   } else {
      dom.startBtn.removeAttribute('disabled');
      dom.resetBtn.removeAttribute('disabled');
   }
};
export const setMinutesInput = function (val) {
   if (val === 0) {
      dom.minutesInput.value = '';
   } else {
      dom.minutesInput.value = val;
   }
   resetButtons();
};
export const setSecondsInput = function (val) {
   if (val === 0) {
      dom.secondsInput.value = '';
   } else {
      dom.secondsInput.value = val;
   }
   resetButtons();
};
export const reset = function () {
   setMinutesInput(0);
   setSecondsInput(0);
   dom.minutesOutput.textContent = '0';
   dom.secondsOutput.textContent = '00';
   dom.minutesInput.removeAttribute('disabled');
   dom.secondsInput.removeAttribute('disabled');
   dom.startBtn.setAttribute('disabled', 'true');
   dom.stopBtn.setAttribute('disabled', 'true');
   dom.pauseBtn.setAttribute('disabled', 'true');
   dom.resetBtn.setAttribute('disabled', 'true');
};
export const updateTimer = function (key, value) {
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
};
export const init = function () {
   dom.startBtn.setAttribute('disabled', 'true');
   dom.stopBtn.setAttribute('disabled', 'true');
   dom.pauseBtn.setAttribute('disabled', 'true');
   dom.resetBtn.setAttribute('disabled', 'true');
};
