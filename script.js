let firstNum, secondNum, operator;

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
console.log(operate(6,2,"+"));