'use strict'

const form = document.getElementById("source");
const fname = document.querySelector('input[name=firstname]');
const lname = document.querySelector('input[name=lastname]');
const resultE = document.getElementById("target");

form.addEventListener("submit", (evt) => {

    // ... prevent the default action.
    evt.preventDefault();

    resultE.innerHTML = `Your name is ${fname.value} ${lname.value}`;

});