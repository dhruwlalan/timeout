let timerObj = {
    minutes: 0,
    seconds: 0,
    timerId: 0
};

function soundAlarm() {
    let amount = 3;
    let audio = new Audio("sounds/Timer_Sound_Effect.mp3");

    function playSound() {
        audio.pause();
        audio.currentTime = 0;
        audio.play();
    }

    for (let i = 0; i < amount; i++) {
        setTimeout(playSound, 1000 * i);
    }
}

function updateValue(key, value) {
    let secondsInput = $(".seconds-input");
    let minutesInput = $(".minutes-input");
    if (secondsInput.val() > 59) {
        secondsInput.val(59);
    }
    if (minutesInput.val() > 300) {
        minutesInput.val(300);
    }
    if (value <= 0) {
        value = 0;
        console.log("Positive values only!");
    }
    if (value > 300 && key == "minutes") {
        value = 300;
    }
    if (value > 59 && key == "seconds") {
        value = 59;
    }
    if (key == "seconds" && value < 10) {
        value = "0" + value;
    }

    $("." + key).html(value || 0);
    timerObj[key] = value;
}

(function detectChanges(key) {

    let input = "." + key + "-input";
    $(input).change(function() {
        updateValue(key, $(input).val());
    });
    $(input).keyup(function() {
        updateValue(key, $(input).val());
    });

    return arguments.callee;
})("minutes")("seconds");

function startTimer() {
    let startButton = $(".clockwork__controls-button--start");
    let stopButton = $(".clockwork__controls-button--stop");
    let pauseButton = $(".clockwork__controls-button--pause");
    let resetButton = $(".clockwork__controls-button--reset");
    startButton.prop('disabled', true);
    stopButton.prop('disabled', false);
    pauseButton.prop('disabled', false);
    resetButton.prop('disabled' , true);
    let secondsInput = $(".seconds-input");
    let minutesInput = $(".minutes-input");
    secondsInput.prop('disabled', true);
    minutesInput.prop('disabled', true);
    timerObj.timerId = setInterval(function() {
        timerObj.seconds--;
        if (timerObj.seconds < 0) {
            if (timerObj.minutes == 0) {
                soundAlarm();
                return stopTimer();
            }
            timerObj.seconds = 59;
            timerObj.minutes--;
        }
        updateValue("minutes", timerObj.minutes);
        updateValue("seconds", timerObj.seconds);
    }, 1000);
}
function stopTimer() {
    let startButton = $(".clockwork__controls-button--start");
    let stopButton = $(".clockwork__controls-button--stop");
    let pauseButton = $(".clockwork__controls-button--pause");
    let resetButton = $(".clockwork__controls-button--reset");
    startButton.prop('disabled', false);
    stopButton.prop('disabled', true);
    pauseButton.prop('disabled', true);
    resetButton.prop('disabled' , false);
    
    let secondsInput = $(".seconds-input");
    let minutesInput = $(".minutes-input");
    secondsInput.prop('disabled', false);
    minutesInput.prop('disabled', false);
    clearInterval(timerObj.timerId);
    let seconds = secondsInput.val();
    let minutes = minutesInput.val();
    if (seconds == 0) {
        seconds = "0" + seconds;
    }
    updateValue("minutes", minutes);
    updateValue("seconds", seconds);
}

function pauseTimer() {
    let startButton = $(".clockwork__controls-button--start");
    let stopButton = $(".clockwork__controls-button--stop");
    let pauseButton = $(".clockwork__controls-button--pause");
    let resetButton = $(".clockwork__controls-button--reset");
    startButton.prop('disabled', false);
    stopButton.prop('disabled', false);
    pauseButton.prop('disabled', true);
    clearInterval(timerObj.timerId);
}

function resetTimer() {
    let secondsInput = $(".seconds-input");
    let minutesInput = $(".minutes-input");
    secondsInput.val(null);
    minutesInput.val(null);
    $(".minutes").html(0);
    $(".seconds").html("00");
    timerObj.timerId = 0;
    timerObj.minutes = 0;
    timerObj.seconds = 0;
}

function changeTheme() {
    var value = $(".svg-icon").attr("src");
    if (value == "svg/icon-dark.svg") {
        $(".svg-icon").attr("src" , "svg/icon-light.svg");
        let root = document.documentElement;
        root.style.setProperty('--white', '#000');
        root.style.setProperty('--black', '#fff');
        root.style.setProperty('--border', 'rgba(255, 255, 255, 0.25)');
        root.style.setProperty('--placeholder', 'rgba(255, 255, 255, 0.2)');
        root.style.setProperty('--button-bg', '#CBCBCB');
        root.style.setProperty('--button-dbg', '#ffffff30');
        root.style.setProperty('--button-dcolor', '#ffffff69');
    }
    else {
        $(".svg-icon").attr("src" , "svg/icon-dark.svg");
        let root = document.documentElement;
        root.style.setProperty('--white', '#fff');
        root.style.setProperty('--black', '#000');
        root.style.setProperty('--border', 'rgba(0, 0, 0, 0.25)');
        root.style.setProperty('--placeholder', 'rgba(0, 0, 0, 0.2)');
        root.style.setProperty('--button-bg', '#222222');
        root.style.setProperty('--button-dbg', '#00000030');
        root.style.setProperty('--button-dcolor', '#fff');
    }
}
