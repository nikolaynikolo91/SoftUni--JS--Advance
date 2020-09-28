function solve(input) {
    let regex = /([\w]+)/g
    let matched = input.match(regex);
    console.log(matched.map(a => a.toUpperCase()).join(', '))

}

solve('Hi, how are you?')
solve('hello')