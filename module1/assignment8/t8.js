"use strict";

const startYear = window.prompt("What is the start year you want to check?")
const endYear = window.prompt("What is the end year you want to check?")

for (let year = parseInt(startYear); year <= parseInt(endYear); year++)

{
    if (isLeap(year)) {
        document.querySelector('#target').innerHTML += `<li>${year}</li>`;
    } 
}


function isLeap(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
