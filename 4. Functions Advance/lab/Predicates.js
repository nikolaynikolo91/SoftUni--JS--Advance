let array1 = [1,2,3,4,5,3];
let found = array1.find(isFound)
function isFound (element) {
    return element > 3
}

console.log(found)

let found2 = array1.find((x) => x > 3)
console.log(found2)