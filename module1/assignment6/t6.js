"use strict";

const userChoise = window.confirm("Should I calculate the square root?");

if (userChoise)
{
    const userNum = window.prompt("What is your number?");
    const result = Math.sqrt(userNum);

    document.querySelector("#target").innerHTML = `The squre root of ${userNum} is ${result}.`;
}

else {
    document.querySelector("#target").innerHTML = "The square root is not calculated.";
}