function solve (arr) {
    let sum2 =0;
let sum1 = arr.slice(0).reduce((a,b) => a + b);
arr.slice(0).forEach(element => {
    sum2 += 1 / element;
});
let sum3 = arr.slice(0).join('');

console.log(sum1)
console.log(sum2)
console.log(sum3)
}

solve ([ 1, 2, 3 ])