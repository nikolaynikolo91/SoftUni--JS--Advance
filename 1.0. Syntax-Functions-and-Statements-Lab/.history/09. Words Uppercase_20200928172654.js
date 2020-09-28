function solve(input) {
    ///let regex = /([a-zA-Z]+)/g
    //let matched = input.match(regex);
    //console.log(matched.map(a => a.toUpperCase()).join(', '))
    let arr = input.split(' ');
    arr.map((x) => x.toUpperCase())

    console.log(arr.join(', '))
}

solve('Hi, how are you?')
solve('hello')