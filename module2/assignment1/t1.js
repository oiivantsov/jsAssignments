"use strict";

const userInput = prompt("Hello! Enter 5 numbers separated by commas and without spaces");

const numArray = userInput.split(',');

for (let i = numArray.length - 1; i >= 0; i--)
{
    console.log(parseInt(numArray[i]));
}
