//(function () { let name = 'Peter' })();
//console.log(name) /// error

let result = (function () {
    let name = 'Peter';
    return name;
})();

console.log(result)

