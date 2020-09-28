function solve(imput) {
    
    if (typeof (imput) === 'number') {
        let result = Math.pow(imput, 2) * Math.PI;
        console.log(result.toFixed(2))
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(imput)}.`)
    }
}

solve('5')