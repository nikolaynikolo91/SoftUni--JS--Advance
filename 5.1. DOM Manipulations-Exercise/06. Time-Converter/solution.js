function attachEventsListeners() {
  let allDiv = Array.from(document.querySelectorAll("input"));
  let allButton = [];
  let allInput = [];

  while (allDiv.length !== 0) {
    allInput.push(allDiv.shift());
    allButton.push(allDiv.shift());
  }

  let days = allInput[0];
  let hours = allInput[1];
  let minutes = allInput[2];
  let seconds = allInput[3];

  allButton.forEach(button => {
    button.addEventListener("click", e => {
      let typeConvert = e.target.parentElement.querySelectorAll("label")[0];
      let inputValue = e.target.parentElement.querySelectorAll(
        'input[type="text"]'
      )[0].value;

      if (typeConvert.innerHTML === "Days: ") {
        hours.value = inputValue * 24;
        minutes.value = inputValue * 1440;
        seconds.value = inputValue * 86400;
      } else if (typeConvert.innerHTML === "Hours: ") {
        days.value = parseFloat((inputValue / 24).toString());
        minutes.value = inputValue * 60;
        seconds.value = inputValue * 3600;
      } else if (typeConvert.innerHTML === "Minutes: ") {
        days.value = parseFloat((inputValue / 1440).toString());
        hours.value = parseFloat((inputValue / 60).toString());
        seconds.value = inputValue * 60;
      } else if (typeConvert.innerHTML === "Seconds: ") {
        days.value = parseFloat((inputValue / 86400).toString());
        hours.value = parseFloat((inputValue / 3600).toString());
        minutes.value = parseFloat((inputValue / 60).toString());
      }
    });
  });
}
