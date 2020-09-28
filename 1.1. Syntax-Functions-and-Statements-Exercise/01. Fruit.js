function solve (fruit, weigth, perKg){
let sum = (weigth/1000) * perKg;
console.log(`I need $${sum.toFixed(2)} to buy ${(weigth/1000).toFixed(2)} kilograms ${fruit}.`)
}

solve ('orange', 2500, 1.80)