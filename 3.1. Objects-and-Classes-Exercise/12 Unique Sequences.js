function solve(input) {
    let output = [];

    for (let arr of input) {
        el = JSON.parse(arr)
        let sorted = el.sort((a, b) => b - a);
        let jsonString = JSON.stringify(sorted)
        if (!output.includes(jsonString)) {
            output.push(jsonString)
        }
    }

    let filtered = output.map((x) => JSON.parse(x))
        .sort((a, b) => a.length - b.length)

    for (const iterator of filtered) {
        let u = iterator
        console.log(`[${u.join(', ')}]`)

    }

}

solve([
    '[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]'
])