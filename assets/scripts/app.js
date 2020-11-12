const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
  parseInt(userInput.value);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const calcDescription = `${currentResult} + ${enteredNumber}`;
  currentResult += enteredNumber;
  outputResult(currentResult, calcDescription);
}

addBtn.addEventListener("click", add);
