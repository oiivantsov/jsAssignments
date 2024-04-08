"use strict";

const userNumber = window.prompt("What number do you want to check?");

if (isNaN(userNumber) || userNumber <= 0) {
    console.error("Invalid input. Please enter a valid number greater than 0.");
} else {

    if (primeNumber(parseInt(userNumber))) {
        document.querySelector('#target').innerHTML = `${userNumber} is a prime number!`;
    } else {
        document.querySelector('#target').innerHTML = `${userNumber} is NOT a prime number!`;
    }

}

function primeNumber(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}