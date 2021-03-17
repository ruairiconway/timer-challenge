// ========== VARIABLES ==========
const timer = document.getElementById('timer-display')
const minsInput = document.getElementById('mins')
const secsInput = document.getElementById('secs')
const timerBtn = document.getElementById('timer-btn')


// ========== GENERATE SELECT INPUT ==========
function generateSelectValue(input) {
    for (let i = 0; i <= 59; i++) {
        const option = document.createElement('option')
        option.setAttribute("value", i)
        if (i < 10) {
            option.innerHTML = `0${i}`
        } else {
            option.innerHTML = i
        }
        input.append(option)
    }
}

generateSelectValue(minsInput)
generateSelectValue(secsInput)


// ========== WATCH TIMER BTN ==========
function formatCountdown(minSet, secSet) {
    let minDisplay = ''
    let secDisplay = ''
    if (minSet < 10) {
        minDisplay = `0${minSet}`
    } else {
        minDisplay = `${minSet}`
    }
    if (secSet < 10) {
        secDisplay = `0${secSet}`
    } else {
        secDisplay = `${secSet}`
    }
    return {
        minDisplay: minDisplay,
        minSet: minSet,
        secDisplay: secDisplay,
        secSet: secSet
    }
}

function renderCountdown(currentTime) {
    timer.innerHTML = `${currentTime.minDisplay}:${currentTime.secDisplay}`
}

function handleCountdown(minSet, secSet) {
    let currentTime = formatCountdown(minSet, secSet)
    console.log(currentTime)
    renderCountdown(currentTime)
    let runTimer = setInterval(() => {
        if (minSet == 0 && secSet == 0) {
            clearInterval(runTimer)
        } else if (minSet > 0 && secSet == 0) {
            minSet -= 1
            secSet = 59
        } else {
            secSet -=1
        }
        currentTime = formatCountdown(minSet, secSet)
        renderCountdown(currentTime)
    }, 1000)
}

// ========== WATCH TIMER BTN ==========
function watchTimerBtn() {
    timerBtn.addEventListener('click', (e) => {
        e.preventDefault()
        handleCountdown(minsInput.value, secsInput.value)
    })
}

watchTimerBtn()