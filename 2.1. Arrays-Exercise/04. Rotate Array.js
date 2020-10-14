function solve (arr) {
    let input = arr.slice(0)
let n = +input.pop() % (arr.length -1) ;

for (let i = 0; i < n; i++) {
    input.unshift(input.pop())  
}

console.log(input.join(' '))
}

solve (['1',
    '2',
    '3',
    '4',
    '2'])
    
    // solve (['Banana',
    //     'Orange',
    //     'Coconut',
    //     'Apple',
    //     // '15'])