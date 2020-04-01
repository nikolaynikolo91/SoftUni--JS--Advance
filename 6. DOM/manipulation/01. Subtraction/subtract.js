function subtract() {
  let firstNumber = document.getElementsByTagName("input")[0];
  let secondNumber = document.getElementsByTagName("input")[1];
  let result = document.getElementsByTagName("div")[1];
  result.textContent = firstNumber.value - secondNumber.value;
  //console.log(secondNumber.value);
}
