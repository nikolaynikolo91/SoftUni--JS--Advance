function solve(arr) {
    let speed = arr[0];
    let place = arr[1];

    let obj = {
        'residential': 20,
        'city': 50,
        'interstate': 90,
        'motorway': 130
    }

    if (obj.hasOwnProperty(place)) {
        let dif = speed - obj[place]
        if (dif <= 0) {
            console.log(``)
        } else if (dif <= 20) {
            console.log(`speeding`)
        } else if (dif <= 40) {
            console.log(`excessive speeding`)
        } else if (dif >40){
            console.log(`reckless driving`)
        }
    }
}

solve([200, 'motorway'])