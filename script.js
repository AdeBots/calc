let num1;
let num2;
let operator;
function add(num1, num2) {
    sum = num1 + num2;
    console.log(num1 + num2);
}
function subtract(num1, num2) {
    console.log(num1 - num2);
}
function multiply(num1, num2) {
    console.log (num1 * num2);

}
function divide(num1, num2) {
    console.log (num1 / num2);

}
function operate(num1, num2, operator){
    if (operator = "+" ){
        add(num1,num2);
    }
    else if (operator = "-" ){
        subtract(num1,num2);
    }
    else if (operator = "x" ){
        multiply(num1,num2);
    }
    else if (operator = "/" ){
        divide(num1,num2);
    }
}
const display = document.querySelector("#value");
const number = {
    one: 1, two: 2, three: 3, four: 4, five: 5, 
    six: 6, seven: 7, eight: 8, nine: 9, zero: 0, dot: "."
};
let num = Object.keys(number);
num.forEach((value) => {
    const btn = document.querySelector("#" + value);
    btn.addEventListener("click", () => {
        const numbers = document.createTextNode(number[value]);
        display.appendChild(numbers)
    });
});

const operators = {
    divide: "/", multiply: "*", subtract: "-", add: "+"
};
let operand = Object.keys(operators);
operand.forEach((value) => {
    const btn = document.querySelector("#" + value);
    btn.addEventListener("click", () => {
        const operands = document.createTextNode(operators[value]);
        display.appendChild(operands)
    })
});
const answerBtn = document.querySelector("#equal")
answerBtn.addEventListener(("click"), () => {
    operate(num1,num2,operator);
});
const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
    display.innerHTML = "";
})

const deleteBtn = document.querySelector("#delete");
console.log(num1);
console.log(num2);