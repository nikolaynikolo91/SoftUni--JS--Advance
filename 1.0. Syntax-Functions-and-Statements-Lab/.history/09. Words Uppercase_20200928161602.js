function solve (input) {
let regex = /([a-zA-Z]+)/g
let matched = input.match(regex);
console.log(matched.map(a => a.toUpperCase()).join(', '))
}

solve ('Hi, how are you?')
solve ('hello')