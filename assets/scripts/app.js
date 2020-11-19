const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

//Gets input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

//Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); //from vendor file
}

function writeToLog(operator, resultBeforeCalc, calcNumber, resultAfterCalc) {
  const logEntry = {
    initialValue: resultBeforeCalc,
    operator: operator,
    number: calcNumber,
    result: resultAfterCalc,
  };
  logEntries = [...logEntries, logEntry];
  console.log(logEntries);
}

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();

  if (
    (calculationType !== "ADD" &&
      calculationType === "SUBTRACT" &&
      calculationType === "MULTIPLY" &&
      calculationType === "DIVIDE") ||
    !enteredNumber
  ) {
    return;
  }

  const initialResult = currentResult;
  let operator;

  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    operator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= enteredNumber;
    operator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= enteredNumber;
    operator = "*";
  } else if (calculationType === "DIVIDE") {
    currentResult /= enteredNumber;
    operator = "/";
  }

  createAndWriteOutput(operator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

// function add() {
//   calculateResult("ADD");
// }

// function subtract() {
//   calculateResult("SUBTRACT");
// }

// function multiply() {
//   calculateResult("MULTIPLY");
// }

// function divide() {
//   calculateResult("DIVIDE");
// }

// addBtn.addEventListener("click", add);
// subtractBtn.addEventListener("click", subtract);
// multiplyBtn.addEventListener("click", multiply);
// divideBtn.addEventListener("click", divide);

addBtn.addEventListener("click", calculateResult.bind(this, "ADD"));
subtractBtn.addEventListener("click", calculateResult.bind(this, "SUBTRACT"));
multiplyBtn.addEventListener("click", calculateResult.bind(this, "MULTIPLY"));
divideBtn.addEventListener("click", calculateResult.bind(this, "DIVIDE"));
