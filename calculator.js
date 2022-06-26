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

//add event listener to number buttons and add them to display when clicked
numBtn.forEach((button) => {
    button.addEventListener('click', () => {
        if (displayValue.includes('.') && button.value === ".") {

        } else {
            displayValue+=button.value;
            display.textContent = displayValue
        }
    })
})

const opsButton = document.querySelectorAll(".ops");
let num1 = "";
let operation = "";

//adds event listener to function so that when it is clicked it recalculates the answer + ops
opsButton.forEach((button) => {
    button.addEventListener('click', () => {
        if (num1 === "" || operation === "") {
            num1 = Number(display.textContent);
            operation = button.value;
            displayValue = "";
        }
        else if (num1 !== "") {
            if (operation === "+") {
                num1 += Number(display.textContent);
                operation = button.value;
                displayValue = "";
            }
            else if (operation === "-") {
                num1 -= Number(display.textContent);
                operation = button.value;
                displayValue = "";
            }
            else if (operation === "*") {
                num1 *= Number(display.textContent);
                operation = button.value;
                displayValue = "";
            }
            else if (operation === "/") {
                num1 /= Number(display.textContent);
                operation = button.value;
                displayValue = "";
            }
        }
        if (Number.isNaN(num1) || !Number.isFinite(num1)) {
            display.textContent = "ERROR";
        }
        else {
            display.textContent = num1;
        }
        console.log(num1);
        console.log(operation);
    });
});

const equalsButton = document.querySelector('#equals');

equalsButton.addEventListener('click', () => {
    if (operation === "+") {
        num1 += Number(display.textContent);
        operation = "";
        displayValue = "";
    }
    else if (operation === "-") {
        num1 -= Number(display.textContent);
        operation = "";
        displayValue = "";
    }
    else if (operation === "*") {
        num1 *= Number(display.textContent);
        operation = "";
        displayValue = "";
    }
    else if (operation === "/") {
        num1 /= Number(display.textContent);
        operation = "";
        displayValue = "";
    }
    if (Number.isNaN(num1) || !Number.isFinite(num1)) {
        display.textContent = "ERROR";
    }
    else {
        display.textContent = num1;
    }
    console.log(num1);
    console.log(operation)
})

const clearButton = document.querySelector('#clear');

//clears everything and sets default values of 0
clearButton.addEventListener('click', () => {
    display.textContent = 0;
    displayValue = "";
    num1 = "";
    operation = "";
});