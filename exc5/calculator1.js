
const elemClickedNumber = document.querySelector("#currentClickedNumber")
let num1 = 0
let num2 = 0
let operator = ""


function addNumberToCalculator(num) {
    if (operator == "") {
        if (elemClickedNumber.innerHTML == 0) {
            elemClickedNumber.innerHTML = num 
        }
        else {
            elemClickedNumber.innerHTML += num 
        }
        num1 = parseFloat(elemClickedNumber.innerHTML)
    } 
    else {  
    if (num2 === 0) {
        elemClickedNumber.innerHTML = num
        num2 = parseFloat(elemClickedNumber.innerHTML)
    }
    else {
        elemClickedNumber.innerHTML += num
        num2 = parseFloat(elemClickedNumber.innerHTML)
    }
}
}


function setOperator(op) {

    if (operator !== "") {
        calculate()
    }

    operator = op
    console.log(`operator is ${operator}`);
    console.log(`num1 is ${num1}`);
    console.log(`num2 is ${num2}`);
}


function addDotToCalculator() {
    if (!elemClickedNumber.innerHTML.includes('.')) {
        elemClickedNumber.innerHTML += '.'
    }
}

function resetCalculator() {
    elemClickedNumber.innerHTML = 0
    num1 = 0;
    num2 = 0;
    operator = "";

}

function calculate() {
    if (operator == '+') {
        num1 += num2;
    }
    else if (operator == '/') {
        num1 /= num2;
    }
    else if (operator == '*') {
        num1 *= num2;
    }
    else if (operator == '-') {
        num1 -= num2;
    }
    elemClickedNumber.innerHTML = num1

    console.log(`operator is ${operator}`);
    console.log(`num1 is ${num1}`);
    console.log(`num2 is ${num2}`);

    operator = ""
    num2 = 0

    console.log(`operator is ${operator}`);
    console.log(`num1 is ${num1}`);
    console.log(`num2 is ${num2}`);
    // num1 = 0

    }






