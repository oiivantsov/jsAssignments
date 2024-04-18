'use strict';


const button = document.querySelector('button');
const p = document.getElementById("target");

button.addEventListener("click", async function(evt) {

  evt.preventDefault();

  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const jsonData = await response.json();

    // console.log(jsonData);

    p.innerHTML = jsonData.value;

  } catch (error) {
    console.log(error.message)
  }

});