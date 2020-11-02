function solve() {
  const input = document.getElementById("input");
  const $output = document.getElementById("output");
  const arr = input.textContent.split(/[\.]/);

  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 0) {
      output.push(arr[i]);
    }

    if (output.length === 3 || i === arr.length - 1) {
      let p = document.createElement("p");
      p.textContent = output.join(". ");
      $output.appendChild(p);
      output = [];
    }
  }
}
