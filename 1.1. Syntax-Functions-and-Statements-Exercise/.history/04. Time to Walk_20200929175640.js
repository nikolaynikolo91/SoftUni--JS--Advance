function solve(steps, stepsLength, stepsPerHour) {
    let mPerSec = stepsPerHour * 0.2778;
    let totalMeters = steps * stepsLength;
    let mBreak = Math.floor(totalMeters / 500);
    let totalTimeSecond = totalMeters / mPerSec;
    let seconds = Math.round(totalTimeSecond) % 60
    let minutes = Math.floor(Math.round(totalTimeSecond) / 60) + mBreak;
    let hour = Math.floor(minutes / 60)
   
    console.log(`${pad(hour)}:${pad(minutes)}:${pad(seconds)}`)

    function pad(num) {
        return ('0' + num).slice(-2)
    }
}

//solve (4000, 0.60, 5)
solve(2564, 0.70, 5.5)