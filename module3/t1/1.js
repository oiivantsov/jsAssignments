"use strict";

const ulTarget = document.querySelector("#target");
const myHTML = "<li>First item</li><li>Second item</li><li>Third item</li>";

ulTarget.innerHTML += myHTML;
ulTarget.setAttribute("class", "my-list");