"use strict";

const names = [];

for (let i = 1; i <= 6; i++) {

    let name = prompt(`Enter name of ${i} dog.`);
    names.push(name);
}

names.sort((a,b) => b.localeCompare(a));

for (let name of names) {

    document.querySelector("#target").innerHTML += `<li>${name}</li>`;

}