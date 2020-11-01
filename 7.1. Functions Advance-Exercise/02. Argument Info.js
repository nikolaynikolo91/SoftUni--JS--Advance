function solve(...input) {
  let obj = {};
  for (const iterator of input) {
    let type = typeof iterator;
    console.log(`${type}: ${iterator}`);
    if (!obj.hasOwnProperty(type)) {
      obj[type] = 0;
    }
    obj[type]++;
  }

  let objOutput = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  for (let line of objOutput) {
    console.log(`${line[0]} = ${line[1]}`);
  }
}

solve("cat", 42, function() {
  console.log("Hello world!");
});
