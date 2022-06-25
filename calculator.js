function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operator(operation, num1, num2) {
    if (operation === "+") {
        return add(num1, num2);
    }
    else if (operation === "-") {
        return subtract(num1, num2);
    }
    else if (operation === "*") {
        return multiply(num1, num2);
    }
    else if (operation === "/") {
        return divide(num1, num2);
    }
}

const numBtn = document.querySelectorAll('.num');
const display = document.querySelector('#display');
let displayValue = "";

numBtn.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (displayValue.includes('.') && e.value === ".") {

        } else {
            displayValue+=e.value;
            display.textContent = displayValue
        }
    })
})