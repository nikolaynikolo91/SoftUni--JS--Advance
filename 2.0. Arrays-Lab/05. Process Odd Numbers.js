function solve (input) {
    let arr = [];
for (let i = 0; i < input.length; i++) {
    if (i % 2 == 1) {
        arr.push(input[i]*2)
    }
}
arr.reverse();
console.log(arr)
}

solve ([10, 15, 20, 25])