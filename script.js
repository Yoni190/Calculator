let firstNum, secondNum, operator;
const numbers = document.querySelectorAll(".number");
const screen = document.querySelector("#screen");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");

function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}

function operate(a, b, opr){
    if(opr == "+")
        return add(a,b);
    else if(opr == "-")
        return subtract(a,b);
    else if(opr == "*")
        return multiply(a,b);
    else if(opr == "/")
        return divide(a,b);
}

function populateScreen(e){
    const selected = e.target.innerHTML;
    screen.append(selected);
}
function getOperator(e){
    firstNum = screen.textContent;
    operator = e.target.innerHTML;
    screen.textContent = "";
}
numbers.forEach(btn =>{
    btn.addEventListener("click", populateScreen);
});
operators.forEach(opr =>{
    opr.addEventListener("click", getOperator);
});
equal.addEventListener("click",()=>{
    secondNum = screen.textContent;
    screen.textContent = "";
    screen.append(operate(+firstNum, +secondNum, operator));
});
clear.addEventListener("click", ()=>{
    screen.textContent = "";
});
console.log(operate(6,2,"+"));