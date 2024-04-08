"use strict";

const userYear = window.prompt("What year do you want to check?")

if (isNaN(parseInt(userYear))) {
    console.error("Invalid input. Please enter a valid year.");
} else {

    if (isLeap(parseInt(userYear))) {
        document.querySelector('#target').innerHTML = `${userYear} is a leap year!`;
    } else {
        document.querySelector('#target').innerHTML = `${userYear} is NOT a leap year!`;
    }

}

function isLeap(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
