function solve(data) {
  let parsedData = {};
  let juice = {};
  for (let i = 0; i < data.length; i++) {
    let tempParseJuice = data[i].split(/\s+[=][>]\s+/);
    if (parsedData[tempParseJuice[0]]) {
      parsedData[tempParseJuice[0]] =
        parsedData[tempParseJuice[0]] + Number(tempParseJuice[1]);
    } else {
      parsedData[tempParseJuice[0]] = +[tempParseJuice[1]];
    }

    let bottlesQ = Math.floor(parsedData[tempParseJuice[0]] / 1000);
    if (bottlesQ > 0) {
      juice[tempParseJuice[0]] = bottlesQ;
    }
  }
  let finalResult = Object.entries(juice);
  for (let arr of finalResult) {
    console.log(arr.join(" => "));
  }
}

solve([
  "Kiwi => 234",
  "Pear => 2345",
  "Watermelon => 3456",
  "Kiwi => 4567",
  "Pear => 5678",
  "Watermelon => 6789",
]);
