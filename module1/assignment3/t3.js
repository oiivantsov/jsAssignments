"use strict";

const num1 = prompt("Please, give your number 1");
document.querySelector("#num1").innerHTML = num1;

const num2 = prompt("Please, give your number 2");
document.querySelector("#num2").innerHTML = num2;

const num3 = prompt("Please, give your number 3");
document.querySelector("#num3").innerHTML = num3;

const a = parseFloat(num1);
const b = parseFloat(num2);
const c = parseFloat(num3);

const sum = a + b + c;
const product = a * b * c;
const average = sum / 3;

document.querySelector("#sum").innerHTML = sum.toFixed(2);
document.querySelector("#product").innerHTML = product.toFixed(2);
document.querySelector("#average").innerHTML = average.toFixed(2);