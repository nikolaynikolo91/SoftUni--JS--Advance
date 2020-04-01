function solve() {
  let allRows = Array.from(document.querySelectorAll("tbody  tr"));
  let button = document.querySelector("button");
  let input = document.querySelector("input");

  button.addEventListener("click", () => {
    let regex = new RegExp(input.value, "gim");

    allRows.map(e => {
      e.classList.remove("select");

      if (e.innerHTML.match(regex) !== null) {
        e.classList.add("select");
      }
    });
    input.value = "";
  });
}
