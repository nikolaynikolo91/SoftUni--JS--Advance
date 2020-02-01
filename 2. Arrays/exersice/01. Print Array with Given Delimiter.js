function solve (arr) {
let delimitar = arr.pop();
console.log(arr.join(delimitar))
}

solve (['One',
    'Two',
    'Three',
    'Four',
    'Five',
    '-'])