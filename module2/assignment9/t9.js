"use strict";

const myNumbers = [2, 7, 4, 1, 3, 10, 5, 8];

function even(array) {

    const evenNumbers = [];

    for (let number of myNumbers)
    {
        if (number % 2 === 0)
        {
            evenNumbers.push(number)
        }
    }

    return evenNumbers;
}

document.querySelector("#array").innerHTML = `Example array: ${myNumbers}`;

document.getElementById("startButton").addEventListener("click", () => {
    document.querySelector("#target").innerHTML = `Output: ${even(myNumbers)}`;
});
