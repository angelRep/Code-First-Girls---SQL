function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

function power(a, b) {
    return Math.pow(a, b);
}

function sqrt(a) {
    return Math.sqrt(a);
}


var result = null;
var num1, num2, op;
var i = 0;

var input = prompt("Welcome to the Calculator!\nWhat is the equation?\nWrite it in this form: number1 operator number2\nException for sqrt: sqrt number1\n(e.g. 10 / 2)\nOperator options are: + - / * pow sqrt");
input = input.split(' ').join('');
input = input.toLowerCase();

//Find number1
while((!(['+', '-', '/', '*', 'p', 's'].includes(input[i]))) && (i < input.length)) {
    i = i + 1;
}
//exception for sqrt (doesn't have number before operator)
if (!(input[i] == 's')) {
    num1 = parseInt(input.slice(0, i));
}

//Find operator
op = input[i];

//Find number2
if (op == 's') {
    num2 = parseInt(input.slice(i+4, input.length));
}
else if (op == 'p') {
    num2 = parseInt(input.slice(i+3, input.length));
}
else {
    num2 = parseInt(input.slice(i+1, input.length));
}

//Find the right function based on the operator
if (op == '+') {
    result = sum(num1, num2);
}
else if (op == '-') {
    result = subtract(num1, num2);
}
else if (op == '/') {
    result = divide(num1, num2);
}
else if (op == '*') {
    result = multiply(num1, num2);
}
else if (op == 's') {
    result = sqrt(num2);
}
else if (op == 'p') {
    result = power(num1, num2);
}

var output = `${(op != 's')?num1:""} ${(op == 's')?"Square root of ":(op  == 'p')?" in the power of ":op} ${num2} = ${result}`;

document.getElementById("equation").innerHTML = output;

alert(output);
