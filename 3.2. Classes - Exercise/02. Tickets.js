function solve(input, inputString) {
  let output = [];

  class Ticket {
    constructor([destination, price, status]) {
      (this.destination = destination),
        (this.price = Number(price)),
        (this.status = status);
    }
  }

  input.forEach(element => {
    let newEl = element.split("|");
    output.push(new Ticket(newEl));
  });

  let sortedArr;

  switch (inputString) {
    case "destination":
      sortedArr = output.sort((a, b) =>
        a.destination.localeCompare(b.destination)
      );
      break;
    case "price":
      sortedArr = output.sort((a, b) => a.price - b.price);
      break;
    case "status":
      sortedArr = output.sort((a, b) => a.status.localeCompare(b.status));
      break;
    default:
      break;
  }

  return sortedArr;
}

solve(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed"
  ],
  "destination"
);
