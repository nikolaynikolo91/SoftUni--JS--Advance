function solve (n1, n2, n3) {
let arr = [n1, n2, n3];
arr.sort((a,b)=> b-a);
let max = arr.shift();

console.log(`The largest number is ${max}.`)
}

solve ('5', '-3', '15')