"use strict";

function rollDice() {
    let count = 0;
    let dice;

    do {
        count++;
        dice = Math.floor(Math.random() * 6) + 1;
        document.querySelector("#target").innerHTML += `<li>Dice #${count}: ${dice}</li>`;
    } while (dice !== 6);

    return;
}

document.getElementById("startButton").addEventListener("click", () => {
    document.querySelector("#target").innerHTML = ""; // to clear previous results
    rollDice();
});
