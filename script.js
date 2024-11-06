const display = document.getElementById("display");
let firstOperand = "";
let secondOperand = "";
let operator = "";
let result = null;
let shouldResetDisplay = false;

// Function to reset display when needed
function resetDisplay() {
    display.textContent = " ";
    shouldResetDisplay = false;
}

// Function to handle number inputs
function inputNumber(number) {
    if (display.textContent === "0" || shouldResetDisplay) resetDisplay();
    display.textContent += number;
}

// Function to handle operator inputs
function inputOperator(op) {
    if (operator) calculate();
    firstOperand = display.textContent;
    operator = op;
    shouldResetDisplay = true;
}

// Function to calculate based on operator
function calculate() {
    if (!operator || shouldResetDisplay) return;
    secondOperand = display.textContent;
    switch (operator) {
        case "+":
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case "-":
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case "×":
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case "÷":
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
        default:
            return;
    }
    display.textContent = result;
    operator = null;
}

// Event listeners for buttons
document.querySelectorAll(".number").forEach(button =>
    button.addEventListener("click", () => inputNumber(button.textContent))
);

document.querySelectorAll(".operator").forEach(button =>
    button.addEventListener("click", () => inputOperator(button.textContent))
);

document.querySelector(".equal").addEventListener("click", calculate);

document.querySelector(".clear").addEventListener("click", () => {
    display.textContent = "0";
    firstOperand = "";
    secondOperand = "";
    operator = "";
});

document.querySelector(".decimal").addEventListener("click", () => {
    if (!display.textContent.includes(".")) display.textContent += ".";
});

document.querySelector(".plus-minus").addEventListener("click", () => {
    display.textContent = (parseFloat(display.textContent) * -1).toString();
});

document.querySelector(".percent").addEventListener("click", () => {
    display.textContent = (parseFloat(display.textContent) / 100).toString();
});
