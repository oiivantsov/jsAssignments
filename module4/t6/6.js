'use strict';


const form = document.querySelector('form');
const articleBox = document.getElementById("target");

form.addEventListener("submit", async function(evt) {

  evt.preventDefault();

  const value_from_input = document.querySelector("input[name=q]").value;

  try {
    const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${value_from_input}`);
    const jsonData = await response.json();

    // console.log(jsonData);

    articleBox.innerHTML = '';

    jsonData.result.forEach((joke) => {

        const article = document.createElement("article");

        const p = document.createElement("p");
        p.innerHTML = joke.value;

        article.appendChild(p);
        articleBox.appendChild(article);
    });

  } catch (error) {
    console.log(error.message)
  }

});