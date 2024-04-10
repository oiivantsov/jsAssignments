"use strict";

const numbers = [];
let userNum;
let inputLoop = true;

do {
    userNum = parseInt(prompt("Enter your number.\nIf it's previously entered, operation will be stopped."));

    if (isNaN(userNum)) {
        alert("Please enter a valid number.");
    } else if (numbers.includes(userNum)) {
        alert("The number has already been given, operation stopped.");
        inputLoop = false;
    } else {
        numbers.push(userNum);
    }

} while (inputLoop);

numbers.sort((a, b) => a - b);

numbers.forEach(num => {
    console.log(num);
});
