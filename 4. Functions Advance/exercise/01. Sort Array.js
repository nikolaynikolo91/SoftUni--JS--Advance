function solve(arr, way) {
    let output;
    if (way === 'asc') {
        output = arr.sort((a, b) => a - b);
    } else {
        output = arr.sort((a, b) => b - a)
    }
    console.log(output)
    return output;
}

solve ([14, 7, 17, 6, 8], 'asc')