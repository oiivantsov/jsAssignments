'use strict';

const order = ["First", "Second", "Third"]

for (let i = 0; i < 3; i++)
{
    let liElement = document.createElement("li");
    liElement.innerHTML = `${order[i]} item`;

    if (i === 1) {
        liElement.classList.add("my-item");
    }

    document.getElementById("target").appendChild(liElement);
}