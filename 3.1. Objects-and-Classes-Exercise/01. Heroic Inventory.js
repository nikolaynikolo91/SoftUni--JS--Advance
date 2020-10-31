function solve(input) {
  let arrObject = [];
  for (let line of input.slice(0)) {
    let [nameHero, lvl, itemArr] = line.split(" / ");
    let items = itemArr ? itemArr.split(", ") : [];

    let heroObj = {
      name: nameHero,
      level: Number(lvl),
      items,
    };

    arrObject.push(heroObj);
  }
  return JSON.stringify(arrObject);
}

let test1 = solve([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);

let test2 = solve(["Jake / 1000 / Gauss, HolidayGrenade"]);
console.log(test2);
