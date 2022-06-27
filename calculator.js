const numBtn = document.querySelectorAll('.num');
const display = document.querySelector('#display');
let displayValue = "";
const preDisplay = document.querySelector('#preDisplay')
let preDisplayValue = "";
let firstNum = true;

//add event listener to number buttons and call function when clicked
numBtn.forEach((button) => {
    button.addEventListener('click', () => {
        numButton(button.value);
    });
})

//add event listener for keyboard numbers decimals, operations, equal, delete
window.addEventListener('keydown', (event) => {
    if (event.key >= 0 && event.key <= 9) {
        numButton(event.key);
    }
    else if (event.key === ".") {
        numButton(event.key);
    }
    else if (event.key === "Backspace") {
        del();
    }
    else if (event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/") {
        operations(event.key);
    }
    else if (event.key === "Enter") {
        equals();
    }
    else if (event.key === "Escape") {
        clear();
    }
})

//function that handles numbers
function numButton(button) {
    if (displayValue.includes('.') && button === ".") {}
    else if (button === "." && displayValue === "") {
        displayValue = "0";
        displayValue+=button;
        display.textContent = displayValue;
        activeOps = false;
    }
    else if (display.textContent === "0" && button === "0") {}
    else {
        if (display.textContent.length < 15) {
            displayValue+=button;
        }
        display.textContent = displayValue;
        activeOps = false;
    }
}

const opsButton = document.querySelectorAll(".ops");
let num1 = "";
let operation = "";
let activeOps = false;

//adds event listener to function
opsButton.forEach((button) => {
    button.addEventListener('click', () => {
        operations(button.value)
    });
});

//when it is clicked it recalculates the answer + ops
function operations(button) {
    firstNum = false;
        if (activeOps === false) {
            if (num1 === "" || operation === "") {
                num1 = Number(display.textContent);
                operation = button;
                activeOps = true;
                preDisplayValue = `${num1} ${operation}`;
                displayValue = "";
            }
            else if (num1 !== "") {
                if (operation === "+") {
                    num1 = operator(operation, num1, Number(display.textContent));
                    operation = button;
                    activeOps = true;
                    preDisplayValue = `${num1} ${operation}`;
                    displayValue = "";
                }
                else if (operation === "-") {
                    num1 = operator(operation, num1, Number(display.textContent));
                    operation = button;
                    activeOps = true;
                    preDisplayValue = `${num1} ${operation}`;
                    displayValue = "";
                }
                else if (operation === "*") {
                    num1 = operator(operation, num1, Number(display.textContent));
                    operation = button;
                    activeOps = true;
                    preDisplayValue = `${num1} ${operation}`;
                    displayValue = "";
                }
                else if (operation === "/") {
                    temp = operator(operation, num1, Number(display.textContent));
                    if (Number.isNaN(temp) || !Number.isFinite(temp)) {
                        alert("Error: Numbers can not be divided by 0");
                        displayValue="";
                    }
                    else {
                        num1 = operator(operation, num1, Number(display.textContent));
                        operation = button;
                        activeOps = true;
                        preDisplayValue = `${num1} ${operation}`;
                        displayValue = "";
                    }
                }
            }
        }
        preDisplay.textContent = preDisplayValue
}

const equalsButton = document.querySelector('#equals');

equalsButton.addEventListener('click', () => {
    equals();
})

//solves the final answer
function equals() {
    if (activeOps === false && firstNum === false) {
        if (operation === "+") {
            preDisplayValue = `${num1} ${operation} ${display.textContent} = `;
            num1 = operator(operation, num1, Number(display.textContent));
            operation = "";
            displayValue = "";
        }
        else if (operation === "-") {
            preDisplayValue = `${num1} ${operation} ${display.textContent} =`;
            num1 = operator(operation, num1, Number(display.textContent));
            operation = "";
            displayValue = "";
        }
        else if (operation === "*") {
            preDisplayValue = `${num1} ${operation} ${display.textContent} = `;
            num1 = operator(operation, num1, Number(display.textContent));
            operation = "";
            displayValue = "";
        }
        else if (operation === "/") {
            temp = operator(operation, num1, Number(display.textContent));
            if (Number.isNaN(temp) || !Number.isFinite(temp)) {
                alert("Error: Numbers can not be divided by 0");
                displayValue="";
            }
            else {
                preDisplayValue = `${num1} ${operation} ${display.textContent} = `;
                num1 = operator(operation, num1, Number(display.textContent));
                operation = "";
                displayValue = "";
            }
        }
        if (num1 === "" && operation === "") {
            display.textContent = "0";
        }
        else {
            display.textContent = num1;
            preDisplay.textContent = preDisplayValue;
        }
    }
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

const clearButton = document.querySelector('#clear');

//clears everything and sets default values of 0
clearButton.addEventListener('click', () => {
    clear();
});

function clear() {
    display.textContent = 0;
    displayValue = "";
    preDisplay.textContent = "";
    preDisplayValue = "";
    num1 = "";
    operation = "";
}

const delButton = document.querySelector('#delete');

//deletes last element in display
delButton.addEventListener('click', () => {
    del()
})

function del() {
    displayValue = displayValue.slice(0, (displayValue.length-1));
    display.textContent = displayValue;
}