"use strict";

function rollDice(sides) {
    let count = 0;
    let dice;

    sides = parseInt(prompt("Enter the maximum number on the dice."));

    do {
        count++;
        dice = Math.floor(Math.random() * sides) + 1;
        document.querySelector("#target").innerHTML += `<li>Dice #${count}: ${dice}</li>`;
    } while (dice !== sides);

    return;
}

document.getElementById("startButton").addEventListener("click", () => {
    document.querySelector("#target").innerHTML = ""; // to clear previous results
    rollDice();
});
