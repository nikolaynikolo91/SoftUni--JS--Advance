function solve() {
  let quizzie = document.getElementById("quizzie");
  let sections = document.getElementsByTagName("section");
  let result = document.querySelector(".results-inner h1");
  let correctAnswer = [
    "onclick",
    "JSON.stringify()",
    "A programming API for HTML and XML documents"
  ];
  let userAnswer = 0;
  let currentStep = 0;

  let handler = e => {
    // console.log(e);
    if (e.target.className === "answer-text") {
      // console.log(e.target);
      // console.log(e.target.innerHTML);
    }

    sections[currentStep].style.display = "none";

    let isAnswerCorrect = correctAnswer.some(
      answer => answer === e.target.innerHTML
    );

    if (isAnswerCorrect) {
      userAnswer++;
    }
    currentStep++;

    if (currentStep < sections.length) {
      sections[currentStep].style.display = "block";
    }

    if (currentStep === correctAnswer.length) {
      quizzie.removeEventListener("click", handler);
      document.querySelector("#results").style.display = "block";
      if (userAnswer === correctAnswer.length) {
        result.innerHTML = "You are recognized as top JavaScript fan!";
      } else {
        result.innerHTML = `You have ${userAnswer} right answers`;
      }
    }
    console.log("still here");
  };

  quizzie.addEventListener("click", handler);
}
