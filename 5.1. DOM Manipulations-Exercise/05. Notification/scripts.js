function notify(message) {
  let hiddenDiv = document.getElementsByTagName("div")[2];
  hiddenDiv.textContent = message;
  hiddenDiv.style.display = "block";

  setTimeout(() => {
    myFunc();
  }, 2000);

  function myFunc() {
    hiddenDiv.style.display = "none";
  }
}
