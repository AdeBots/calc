let num1 = "";
let num2 = "";
let operator = "";
let OperationBegin = false;
let dotUsed = false;


function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;

}
function divide(num1, num2) {
    if(num2 !== 0){
        return num1 / num2;
    }
    else {
        return "MATH Error";
    }
}
function operate(num1, num2, operator){
    num1 = parseFloat (num1);
    num2 = parseFloat (num2);
    if (operator === "+" ){
        return add(num1,num2);
    }
    else if (operator === "-" ){
        return subtract(num1,num2);
    }
    else if (operator === "x" ){
        return multiply(num1,num2);
    }
    else if (operator === "/" ){
        return divide(num1,num2);
    }
    else{
        return "Invalid Operation"
    }
}
const display = document.querySelector("#value");
const number = {
    one: 1, two: 2, three: 3, four: 4, five: 5, 
    six: 6, seven: 7, eight: 8, nine: 9, zero: 0, dot: "."
};
Object.keys(number).forEach((value) => {
    const btn = document.querySelector("#" + value);
    btn.addEventListener("click", () => {
        if(number[value] === "." && dotUsed === true){
            return;
        }
        if(number[value] === "." ){
            dotUsed = true;
        }
        if (OperationBegin === false){
            num1 += number[value];
        }
        else if (OperationBegin === true){
            num2 += number[value];
        }
        display.innerText += number[value];
    });
});

const signChange = document.querySelector("#sign")
signChange.addEventListener("click", () => {
    display.innerText = "-" + display.innerText
})
const operators = {
    divide: "/", multiply: "x", subtract: "-", add: "+"
};
Object.keys(operators).forEach((value) => {
    const btn = document.querySelector("#" + value);
    btn.addEventListener("click", () => {
        if(num1 !== "" && num2 === ""){
            operator = operators[value];
            display.innerText += operators[value];
            OperationBegin = true;
            dotUsed = false;
        }
        else if(num1 !== "" && num2 !== "" && OperationBegin === true){
            num1 = operate(num1, num2, operator);
            display.innerText = num1.toFixed(2);
            operator = operators[value];
            display.innerText += operators[value];
            num2 = "";
        }
    })
});

// get answer logic
const answerBtn = document.querySelector("#equal")
answerBtn.addEventListener(("click"), () => {
    if(num1 !== "" && num2 !== "" && OperationBegin === true){
        result = operate(num1,num2,operator);
        display.innerText = result.toFixed(2);
        num1 = result.toString();
        num2 = "";
        operator = "";
        OperationBegin = false;
        dotUsed = num1.includes(".");
    }
});

// clear button logic
const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
    display.innerHTML = "";
    num1 = "";
    num2 = "";
    operator = "";
    OperationBegin = false;
    dotUsed = false;
})

// delete button logic
const deleteBtn = document.querySelector("#delete");
deleteBtn.addEventListener("click", () => {
    let currentDisplay = display.innerText;
    display.innerText = currentDisplay.slice(0,-1);
    if(OperationBegin === true && num2 !== ""){
        num2 = num2.slice(0, -1);
    }
    else if (OperationBegin === true && operator !== "") {
        operator = ""
        OperationBegin = false;
    }
    else {
        num1 = num1.slice(0, -1);
    }
});
