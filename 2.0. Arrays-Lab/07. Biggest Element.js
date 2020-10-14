function solve (input) {
let arr = []
input.forEach(element => {
    arr = arr.concat(element)    
});

let sort = arr.sort((a,b) => b - a).shift()
console.log(sort)
}

solve ([[20, 50, 10],
    [8, 33, 145]]
   )