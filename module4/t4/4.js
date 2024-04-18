'use strict';


const searchForm = document.querySelector('#search-form');
let sectionPictures = document.getElementById("pictures");

searchForm.addEventListener('submit', async function(evt) {
    // ... prevent the default action.
    evt.preventDefault();
    // get value of input element
    const value_from_input = document.querySelector('input[name=q]').value;
    try {                                               // error handling: try/catch/finally
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${value_from_input}`);    // starting data download, fetch returns a promise which contains an object of type 'response'
        const jsonData = await response.json();          // retrieving the data retrieved from the response object using the json() function

        sectionPictures.innerHTML = '';

        jsonData.forEach((tvShow) => {

            let articleElement = document.createElement("article");
            articleElement.classList.add("card");
          
            let headerElement = document.createElement("h2");
            headerElement.innerHTML = tvShow.show.name;

            let figureElement = document.createElement("figure");
          
            let imgElement = document.createElement("img");
            imgElement.src = tvShow.show.image ? tvShow.show.image.medium : 'https://via.placeholder.com/210x295?text=Not%20Found';
            imgElement.alt = tvShow.show.name;

            let linkElement = document.createElement("a");
            linkElement.innerHTML = "See more details here";
            linkElement.href = tvShow.show.url;
            linkElement.target = "_blank";
          
            let divElement = document.createElement("div");
            divElement.innerHTML = tvShow.show.summary;
          
            
            figureElement.appendChild(imgElement);
          
            articleElement.appendChild(headerElement);
            articleElement.appendChild(figureElement);
            articleElement.appendChild(divElement);
            articleElement.appendChild(linkElement);
          
            sectionPictures.appendChild(articleElement);

        });

    } catch (error) {
        console.log(error.message);
    }
});