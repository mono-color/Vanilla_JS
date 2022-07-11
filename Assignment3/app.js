const condition = document.querySelector(".condition-input");
const answer = document.querySelector(".answer-input");
const check = document.querySelector(".answer-submit");

const resultDiv = document.querySelector(".result");
const printMatch = document.querySelector(".result h3:first-child");
const printResult = document.querySelector(".result h3:last-child");


function checkNumber(event) {
  event.preventDefault();
  // 조건 숫자, 맞출 숫자, 머신이 만드는 숫자
  let CON_NUM = parseInt(condition.value);
  let ANS_NUM = parseInt(answer.value);

  if (CON_NUM === null || ANS_NUM === null) {
    return;
  }

  let machineNum = Math.round(Math.random() * CON_NUM);

  console.log("machineNum : " + machineNum);
  if (machineNum !== ANS_NUM) {
    if (resultDiv.classList.contains("hidden")) {
      resultDiv.classList.remove("hidden");
    }
    printMatch.innerText = `You choose ${ANS_NUM}, The machine choose ${machineNum}.`;
    printResult.innerText = "You lost!";
  }
  if (machineNum === ANS_NUM) {
    if (resultDiv.classList.contains("hidden")) {
      resultDiv.classList.remove("hidden");
    }
    printMatch.innerText = `You choose ${ANS_NUM}, The machine choose ${machineNum}.`;
    printResult.innerText = "You won!";
  }
}

check.addEventListener("click", checkNumber);
