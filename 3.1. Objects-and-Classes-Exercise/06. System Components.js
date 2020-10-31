function solve(input) {
  let data = input.reduce((db, parseData) => {
    let [sName, cName, subComponent] = parseData.split(/\s+\|\s+/);

    if (!db[sName]) {
      db[sName] = { [cName]: [subComponent] };
      return db;
    }
    if (!db[sName][cName]) {
      db[sName][cName] = [subComponent];
      return db;
    }
    db[sName][cName] = [...db[sName][cName], subComponent];
    return db;
  }, {});

  let sorted = Object.keys(data).sort((a, b) => {
    let first = a.length;
    let second = b.length;
    if (first > second) return -1;
    if (first < second) return 1;
    return a.toLowerCase().localeCompare(b.toLocaleLowerCase());
  });

  for (let iterator of sorted) {
    console.log(iterator);

    for (let secondIterator of Object.keys(data[iterator])) {
      console.log(`|||${secondIterator}`);
      data[iterator][secondIterator].forEach((e) => console.log("||||||" + e));
    }
  }
}

solve([
  "SULS | Main Site | Home Page",
  "SULS | Main Site | Login Page",
  "SULS | Main Site | Register Page",
  "SULS | Judge Site | Login Page",
  "SULS | Judge Site | Submittion Page",
  "Lambda | CoreA | A23",
  "SULS | Digital Site | Login Page",
  "Lambda | CoreB | B24",
  "Lambda | CoreA | A24",
  "Lambda | CoreA | A25",
  "Lambda | CoreC | C4",
  "Indice | Session | Default Storage",
  "Indice | Session | Default Security",
]);
