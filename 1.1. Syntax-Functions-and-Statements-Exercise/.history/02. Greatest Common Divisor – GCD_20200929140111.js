function solve(num, num2) {
  let arr = [];
  let smallestNum = Math.min(num, num2);

  for (let i = 1; i <= smallestNum; i++) {
    let sumFirst = num % i;
    let sumSecond = num2 % i;
    if (sumFirst === 0 & sumSecond === 0) {
      arr.push(i)
    }
  }

  console.log(Math.max(...arr))

}

solve(2154, 458)