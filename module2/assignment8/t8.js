"use strict";

const myArray = ["Johnny", "DeeDee", "Joey", "Marky"];

function concat(array) {

    let myString = "";

    for (let nameFromArray of array)
    {
        myString += nameFromArray;
    }

    return myString;
}

document.querySelector("#array").innerHTML = `Example array: ${myArray}`;

document.getElementById("startButton").addEventListener("click", () => {
    document.querySelector("#target").innerHTML = `Output: ${concat(myArray)}`;
});
