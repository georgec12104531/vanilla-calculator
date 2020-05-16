let firstNum = "";
let secondNum = "";
let operation = null;

// Put number on output
function handleOutput(strNum) {
  document.querySelector("#output").innerHTML = parseInt(strNum);
}

// Handle Number
function handleNumber(number) {
  if (!operation) {
    firstNum += number;
    handleOutput(firstNum);
  } else {
    secondNum += number;
    handleOutput(secondNum);
  }
}

//handle Operation
function handleOperation(newOperation) {
  let total;
  // if there is already an operation, compute the total first
  // assign the total to the first number
  if (operation || newOperation === "=") {
    // total = parseInt(firstNum) + parseint(secondNum);
    if (operation === "+") {
      total = parseInt(firstNum) + parseInt(secondNum);
    } else if (operation === "-") {
      total = parseInt(firstNum) - parseInt(secondNum);
    } else if (operation === "/") {
      total = parseInt(firstNum) / parseInt(secondNum);
    } else if (operation === "*") {
      total = parseInt(firstNum) * parseInt(secondNum);
    }
    firstNum = total;
    secondNum = "";

    handleOutput(total);
  }

  operation = newOperation === "=" ? null : newOperation;
}

//Add Number
document
  .querySelector(".calculator-container")
  .addEventListener("click", (e) => {
    if (e.target.classList.contains("number")) {
      handleNumber(e.target.innerHTML);
    }

    if (e.target.classList.contains("op")) {
      handleOperation(e.target.innerHTML);
    }
  });
