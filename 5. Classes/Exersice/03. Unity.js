class Rat {
  rats = [];

  constructor(name) {
    this.name = name;
  }

  toString() {
    return this.name + this.rats.map(rat => `\n##${rat.name}`).join("");
  }

  unite(otherRat) {
    if (otherRat instanceof Rat) {
      this.rats.push(otherRat);
    }
  }

  getRats() {
    return this.rats;
  }
}

let firstRat = new Rat("Peter");
console.log(firstRat.toString());
console.log(firstRat.getRats());
firstRat.unite(new Rat("George"));
firstRat.unite(new Rat("Alex"));
console.log(firstRat.getRats());
console.log(firstRat.toString());
