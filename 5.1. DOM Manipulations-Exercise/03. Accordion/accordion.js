function toggle() {
  let textExtra = document.getElementsByTagName("div")[2];
  let options = document.getElementsByClassName("button")[0];

  if (options.textContent === "More") {
    textExtra.style.display = "block";
    options.textContent = "Less";
  } else {
    textExtra.style.display = "none";
    options.textContent = "More";
  }
}
