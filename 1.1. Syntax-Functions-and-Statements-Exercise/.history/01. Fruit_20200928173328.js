function solve (fruit, weight, perKg){
let sum = (weight/1000) * perKg;
console.log(`I need $${sum.toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${fruit}.`)
}



solve ('orange', 2500, 1.80)