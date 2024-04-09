"use strict";

const dicesNum = parseInt(window.prompt("Please enter the number of dice."));
if (isNaN(dicesNum) || dicesNum <= 0) {
    console.error("Invalid input. Please enter a valid number greater than 0.");
} else {
    let numSum = 0;
    const dices = document.createElement("div");
    const assignmentSection = document.getElementById("assignment");

    for (let i = 0; i < dicesNum; i++) {
        const dice = randomIntFromInterval(1, 6);
        numSum += dice;

        const pNumInfo = document.createElement("p");
        pNumInfo.textContent = `Dice #${i + 1}: ${dice}`;
        dices.appendChild(pNumInfo);
    }

    const pResult = document.createElement("p");
    pResult.textContent = `The sum of all ${dicesNum} dices is ${numSum}.`;

    assignmentSection.appendChild(pResult);
    assignmentSection.appendChild(dices);
}

function randomIntFromInterval(min, max) {
    if (min > max) {
        [min, max] = [max, min];
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
}
