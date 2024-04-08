"use strict";

const studentName = prompt("Welcome to Hogwarts School of Witchcraft and Wizardry!\nWhat is your name?")
const classNum = randomIntFromInterval(1, 4)
let className = "";

switch (classNum) {
    case 1:
        className = "Gryffindor";
        document.querySelector('#target').innerHTML = `${studentName}, you are ${className}.`;
        break;

    case 2:
        className = "Slytherin";
        document.querySelector('#target').innerHTML = `${studentName}, you are ${className}.`;
        break;

    case 3:
        className = "Hufflepuff";
        document.querySelector('#target').innerHTML = `${studentName}, you are ${className}.`;
        break;

    case 4:
        className = "Ravenclaw";
        document.querySelector('#target').innerHTML = `${studentName}, you are ${className}.`;
        break;
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}