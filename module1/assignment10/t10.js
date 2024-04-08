"use strict";

const dicesNum = parseInt(window.prompt("Please enter the number of dice."));
const targetSum = parseInt(window.prompt("Please enter the sum of the eye numbers to calculate probability."));
const rolls = 10_000;


if (isNaN(dicesNum) || dicesNum <= 0 || isNaN(targetSum) || targetSum <= 0) {
    console.error("Invalid input. Please enter a valid number greater than 0.");
} else {

    let matches = 0;

    for (let i = 0; i < rolls; i++) {
        
        let numSum = 0;

        for (let j = 0; j < dicesNum; j++) {
            numSum += randomIntFromInterval(1, 6);
        }

        if (numSum === targetSum) {
            matches += 1;
        }
    }

    const probability = (matches * 100 / rolls).toFixed(2);

    document.querySelector("#target").innerHTML = `Probability to get sum ${targetSum} with ${dicesNum} dice is ${probability}%`;

}

function randomIntFromInterval(min, max) {
    if (min > max) {
        [min, max] = [max, min];
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
}
