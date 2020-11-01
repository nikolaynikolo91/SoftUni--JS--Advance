function solve() {
  let optionList = document.querySelectorAll("#selectMenuTo")[0];
  let button = document.querySelector("button");
  let input = document.querySelector("#input");

  optionList.innerHTML = `
<option selected value=""></option>
<option value="hexadeicmal">Hexadeicmal</option>
<option  value="binary">Binary</option>
`;
  button.addEventListener("click", e => {
    let output;

    if (optionList.value == "binary") {
      output = Number(input.value).toString(2);
    } else {
      output = Number(input.value)
        .toString(16)
        .toUpperCase();
    }

    document.getElementById("result").value = output;
  });
}
