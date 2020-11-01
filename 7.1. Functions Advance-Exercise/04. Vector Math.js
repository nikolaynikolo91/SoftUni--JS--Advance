(function solve() {
  add = (vec1, vec2) => {
    let x = vec1[0] + vec1[1];
    let y = vec2[0] + vec2[1];

    return [x, y];
  };

  function multiply(vec1, scalar) {
    let x = vec1[0] * scalar;
    let y = vec1[1] * scalar;

    return [x, y];
  }

  function length(vec1) {
    let result = Math.sqrt(Math.pow(vec1[0], 2) + Math.pow(vec1[1], 2));
    return result;
  }
  (function solve() {
    add = (vec1, vec2) => {
      let x = vec1[0] + vec1[1];
      let y = vec2[0] + vec2[1];
  
      return [x, y];
    };
  
    function multiply(vec1, scalar) {
      let x = vec1[0] * scalar;
      let y = vec1[1] * scalar;
  
      return [x, y];
    }
  
    function length(vec1) {
      let result = Math.sqrt(Math.pow(rec1[0], 2) + Math.pow(vec1[1], 2));
      return result;
    }
  
    function dot(vec1, vec2) {
      let x = vec1[0] * vec2[0];
      let y = vec1[1] * vec2[1];
      let result = x + y;
  
      return result;
    }
  
    function cross(vec1, vec2) {
      let x = vec1[0] * vec2[1];
      let y = vec1[2] * vec2[2];
      let result = x - y;
      return result;
    }
    const solution = {
      add: this.add,
      multiply,
      length,
      dot,
      cross
    };
    return solution;
  })()

const solution = solve();
console.log(solution.add([1, 1], [1, 0]));

// solution.multiply([3.5, -2], 2);
// solution.length([3, -4]);
// solution.dot([1, 0], [0, -1]);
// solution.cross([3, 7], [1, 0]);
