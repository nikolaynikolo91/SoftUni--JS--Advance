const f = (function() {
    let counter = 0;
return function () {
    console.log(++counter)
}
})();



f(); //1
f(); //2
f(); //3
