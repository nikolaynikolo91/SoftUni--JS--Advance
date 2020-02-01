(function solve() {
  let sum = 0;

  function add(added) {
    sum += added;
    return add;
  }

  add.toString = function() {
    return sum;
  };

  return add;
})();

const add = solve();

console.log(add(1)(2)(6).toString());
