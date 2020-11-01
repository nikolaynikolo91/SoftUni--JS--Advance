function greeting() {
    return function () {
        return 'Hi!'
    }
}

let sayHi = greeting();
console.log(`$$$  ${sayHi()}`)