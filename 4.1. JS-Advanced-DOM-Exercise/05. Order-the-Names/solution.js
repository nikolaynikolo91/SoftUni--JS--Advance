function solve() {
  let button = document.getElementsByTagName("button")[0];
  let input = document.getElementsByTagName("input")[0];
  let list = document.getElementsByTagName("li");

  button.addEventListener("click", e => {
    let inputName = input.value;

    if (inputName) {
      let currentName = "";
      currentName +=
        inputName[0].toLocaleUpperCase() +
        inputName.substring(1).toLocaleLowerCase();

      let index = currentName.charCodeAt(0) - 65;

      if (list[index].textContent.length === 0) {
        list[index].textContent += currentName;
      } else {
        list[index].textContent += ", " + currentName;
      }

      input.value = null;
    }
  });
}
