const answerEl = document.getElementById("answer")
const buttonEl = document.getElementById("button").addEventListener("click", showAnswer)
const providedAnswerEl = document.getElementById("providedAnswer")
const checkboxEl = document.getElementById("checkbox")
const exerciseEl = document.getElementById("exercise")

let exerciseAnswer = ""

function generateNumbersEasy() {
    const randomNumber1 = (Math.floor((Math.random())*1000+1)).toFixed(2);
    const randomNumber2 = Math.floor(Math.random()*1000)+1;
    const randomNumber3percent = Math.floor(Math.random()*100)+1;

    exerciseEl.innerHTML = `What is ${randomNumber3percent} % of ${randomNumber1}?`
    let exerciseAnswer = randomNumber1*randomNumber3percent

}

function showAnswer() {
    providedAnswerEl.innerHTML = exerciseAnswer
}

