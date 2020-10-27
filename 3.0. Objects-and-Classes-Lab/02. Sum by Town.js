function sumByTown(arr) {
  const obj = {};

  for (let i = 0; i < arr.length; i += 2) {
    const town = arr[i];
    const value = arr[i + 1];
    if (obj.hasOwnProperty(town)) {
      obj[town] += +value;
      continue;
    }
    obj[town] = +value;
  }

  return JSON.stringify(obj)
}

let test = sumByTown(["Sofia", "20", "Varna", "3", "Sofia", "5", "Varna", "4"]);
console.log(test)
