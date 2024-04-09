"use strict";

const names = [];
let numNames = parseInt(prompt("Enter the number of participants."));

for (let i = 1; i <= numNames; i++) {

    let name = prompt(`Enter name of ${i} participant.`);
    names.push(name);
}

names.sort();

for (let name of names) {

    document.querySelector("#target").innerHTML += `<li>${name}</li>`;

}