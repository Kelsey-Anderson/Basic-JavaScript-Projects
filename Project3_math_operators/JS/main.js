//This is addition function
function addition() {
var add = 13 + 4;
document.getElementById("Math").innerHTML = "13 + 4 = " + add;
}

//This is subtraction function
function subtraction_Function() {
    var Subtraction = 5 - 2;
    document.getElementById("Math").innerHTML = "5-2 = " +Subtraction;
}

//This is multiplication function
function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("Math").innerHTML = "6x8 = " + simple_Math;
}

//This is division function
function division() {
    var divide = 48 / 6;
    document.getElementById("Math").innerHTML = "48 / 6 =" + divide;
}

//This is a bunch of math in a function
function more_math() {
    var simple = (1+2) * 10 / 2 - 5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " +simple;
}

//This is the modulus operator function
function modulus_operator() {
    var mod_op = 25 % 6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of: " +mod_op;
}

//This is the negation operator function
function negation_operator() {
    var x = 10;
    document.getElementById("Math").innerHTML = "the negative of 10 is written as " + -x;
}

//This is increment function
function increment() {
    var X = 5;
    X++;
    document.getElementById("Math").innerHTML = "5 incremented by 1 equals " + X++;
}

//This is decrement function
function decrement() {
    var X = 5.25
    X--;
    document.getElementById("Math").innerHTML = "5.25 decremented by 1 equals " + X--;
}

//This is random number window alert, between 0 and 10
function random_number() {
    window.alert(Math.random() * 10);
}
