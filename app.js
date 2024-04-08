"use strict";

const section1 = document.getElementById('Module1');
const ulLinks = document.createElement('ul');

for (let i = 1; i <= 10; i++) {

    const li = document.createElement('li');
    const link = document.createElement('a');

    link.href = `module1/assignment${i}/t${i}.html`;
    link.textContent = "Assignment " + i;

    li.appendChild(link);
    ulLinks.appendChild(li);
}

section1.appendChild(ulLinks);
