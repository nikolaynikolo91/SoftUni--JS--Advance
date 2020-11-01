function create(words) {
  let arrInput = words.slice(0);
  let content = document.getElementsByTagName("div")[0];
  content.style.display = "block";

  for (let element of arrInput) {
    const newDiv = document.createElement("div");
    const newPar = document.createElement("p");
    newPar.style.display = "none";
    newPar.textContent = element;
    content.appendChild(newDiv);
    newDiv.appendChild(newPar);
  }

  content.addEventListener("click", onClick);

  function onClick(e) {
    let currentDiv = e.target;
    let hiddenPar = currentDiv.getElementsByTagName("p")[0];
    hiddenPar.style.display = "block";
  }
}
