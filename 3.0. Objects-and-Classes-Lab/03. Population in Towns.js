function populationInTown(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    const [town, population] = arr[i].split(" <-> ");
    if (obj.hasOwnProperty(town)) {
      obj[town] += +population;
    } else {
      obj[town] = +population;
    }
  }

  for (const key in obj) {
    const value = obj[key];
    console.log(`${key} : ${value}`);
  }
}

populationInTown([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);


