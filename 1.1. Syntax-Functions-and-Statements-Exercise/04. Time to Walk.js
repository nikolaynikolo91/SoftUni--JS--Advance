function solve (steps, stepsLength, stepsPerHour) {
let mPerSec = stepsPerHour * 0.2778;
let totalMeters = steps * stepsLength;
let mBreak = Math.floor(totalMeters / 500);
let totalTimeSecond = totalMeters/ mPerSec;
let seconds = Math.round(totalTimeSecond) %60
let minutes = Math.floor(Math.round(totalTimeSecond) / 60) + mBreak;
let hour = Math.floor(minutes/60)
if(hour<9){
    console.log(`0${hour}:${minutes}:${seconds}`)
} else {
    console.log(`${hour}:${minutes}:${seconds}`)
} 
}

//solve (4000, 0.60, 5)
solve (2564, 0.70, 5.5)