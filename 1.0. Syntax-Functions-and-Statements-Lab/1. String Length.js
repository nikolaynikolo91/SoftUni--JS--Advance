function solve (arr1, arr2, arr3) {
let sumLength;
let sumAverage;

let firsElement = arr1.length;
let secondElement = arr2.length;
let thurdElement = arr3.length;

sumLength = firsElement + secondElement + thurdElement;
sumAverage = Math.floor(sumLength/3);

console.log(sumLength);
console.log(sumAverage);
}

solve ('chocolate', 'ice cream', 'cake')
solve ('pasta', '5', '22.3')