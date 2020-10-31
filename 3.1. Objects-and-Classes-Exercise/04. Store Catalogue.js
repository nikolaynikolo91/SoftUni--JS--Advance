function cat(data) {
  let parsedData = data.reduce((acc, prodLine) => {
    let name = prodLine.split(" : ")[0];

    if (acc[name[0]]) {
      acc[name[0]] = [...acc[name[0]], prodLine];
    } else {
      acc[name[0]] = [prodLine];
    }
    debugger;
    return acc;
  }, {});

  Object.keys(parsedData)
    .sort()
    .map((x) => {
      console.log(x);
      parsedData[x].sort().map((value) => {
        console.log(`  ${value.split(" : ").join(": ")}`);
      });
    });
}

cat([
  "Appricot : 20.4",
  "Appricot : 30",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
