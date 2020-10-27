function solve(input) {
    let arr = [];

  let myObj = {};

  for (let i = 0; i < input.length; i++) {
    const [town, product, price] = input[i].split(" | ");
    
    arr.push({
        product,
        town,
        price
    })

    if (!myObj.hasOwnProperty(product)) {
      myObj[product] = {
        town,
        price,
        i,
      };
    } else {
      if (myObj[product]["town"] === town) {
        myObj[product]["price"] = price;
        myObj[product]["i"] = i;
      } else if (+myObj[product]["price"] > +price) {
        myObj[product] = {
          town,
          price,
          i,
        };
      }
    }
  }

  let sorted = Object.keys(myObj).sort((a, b) => a["i"] - b["i"]);

  for (const product of sorted) {
      let town = myObj[product]["town"];
      let price = myObj[product]["price"];

     sortEl =  arr.find((el) => el.product === product && el.price === price)

     if(sortEl){
         town = sortEl.town;
         price = sortEl.price;
     }
    console.log(
      `${product} -> ${price} ` +
        "(" +
        town +
        ")"
    );
  }
}

solve([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);

solve ([
    //'Sofia City | Audi | 100000',
   // 'Sofia City | BMW | 100000',
    // 'Sofia City | Mitsubishi | 10000',
    // 'Sofia City | Mercedes | 10000',
    // 'Sofia City | NoOffenseToCarLovers | 0',
   // 'Mexico City | Audi | 1000',
    // 'Mexico City | BMW | 99999',
    // 'New York City | Mitsubishi | 10000',
    // 'New York City | Mitsubishi | 1000',
    //'Mexico City | Audi | 100000',
   // 'Washington City | Mercedes | 1000'
])
