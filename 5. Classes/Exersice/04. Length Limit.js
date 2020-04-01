class Stringer {
  constructor(string, innerLength) {
    (this.innerString = string), (this.innerLength = innerLength);
  }

  increase(length) {
    this.innerLength += length;
  }

  decrease(length) {
    let sumLength = this.innerLength - length;
    if (sumLength < 0) {
      return (this.innerLength = 0);
    } else {
      return (this.innerLength = sumLength);
    }
  }

  toString() {
    if (this.innerLength === 0) {
      return "...";
    }
    if (this.innerString.length <= this.innerLength) {
      return this.innerString.substring(0, this.innerLength).trim();
    } else {
      return this.innerString.substring(0, this.innerLength) + "...";
    }
  }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test
test.decrease(3);
console.log(test.toString()); // Te...
test.decrease(5);
console.log(test.toString()); // ...
test.increase(4);
console.log(test.toString()); // Test
