function tripleSum (a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}

console.log(tripleSum(1)(2)(3))

let first = tripleSum(5);
let second = first(3);
let result = second(10)
console.log(result)


let secondPrim = first(9)
let result2 = secondPrim(10)
console.log(result2)

