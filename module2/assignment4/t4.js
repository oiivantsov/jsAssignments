"use strict";

const numbers = [];
let userNum = "";
let inputLoop = true;

do {
    userNum = parseInt(prompt("Enter any number, 0 to stop"));
    numbers.push(userNum);

    if (userNum === 0) {
        inputLoop = false;
    }

} while (inputLoop);

numbers.sort((a, b) => b - a);

// console.log(numbers);

for (const num of numbers) {

    console.log(num);

}

