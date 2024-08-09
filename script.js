let operator="", expression = [], result = 0;
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
    if(b == 0){
        return "Cannot divide by zero";
    }
    else if(a%b != 0)
        return (a/b).toFixed(2);
    else
        return a / b;
}

function operate(a, b=0, opr){
    if(opr == "+")
        return add(a,b);
    else if(opr == "-")
        return subtract(a,b);
    else if(opr == "*")
        return multiply(a,b);
    else if(opr == "/")
        return divide(a,b);
}

function makeDoubleDigits(array){
    for(let i = 0; i<expression.length; i++){
        if(typeof array[i] === "number" && typeof array[i+1] === "number"){
            let concat = array[i].toString() + array[i+1];
            array.splice(i, 2, +concat);
        }
    }
}
function populateScreen(e){
    const selected = e.target.innerHTML;
    expression.push(+selected);
    screen.append(selected);
    makeDoubleDigits(expression);
}

numbers.forEach(btn =>{
    btn.addEventListener("click", populateScreen);
});
operators.forEach(opr =>{
    opr.addEventListener("click", (e)=>{
        operator = e.target.innerHTML;
        if(expression[1] == "+" || expression[1] == "-" || expression[1] =="*" || expression[1] == "/"){
            result = operate(expression[0], expression[2], expression[1]);
            screen.textContent = "";
            expression.splice(0,3,result);
            screen.append(expression[0]);
            screen.append(operator);
            expression.push(operator);
        }
        else{
        screen.append(operator);
        expression.push(operator);
        }
    });
});
equal.addEventListener("click",()=>{
    if(expression.length <= 2 || typeof expression[0] != "number" ){
        alert("Please enter a valid expression");
    }
    else{
        makeDoubleDigits(expression);
        screen.textContent = "";
        screen.append(operate(expression[0], expression[2], expression[1]));
    }
});
clear.addEventListener("click", ()=>{
    screen.textContent = "";
    expression.splice(0, expression.length);
});