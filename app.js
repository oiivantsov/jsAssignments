"use strict";

// mod1
for (let i = 1; i <= 10; i++) {
    document.querySelector(".mod1").innerHTML += `<li><a href="module1/assignment${i}/t${i}.html">Assignment ${i}</a> ✔️</li>`;
}


// mod2
for (let i = 1; i <= 10; i++) {
    document.querySelector(".mod2").innerHTML += `<li><a href="module2/assignment${i}/t${i}.html">Assignment ${i}</a> ✔️</li>`;
}

// mod3
for (let i = 1; i <= 11; i++) {
    document.querySelector(".mod3").innerHTML += `<li><a href="module3/t${i}/${i}.html">Assignment ${i}</a> ✔️</li>`;
}


// mod4
for (let i = 1; i <= 7; i++) {
    if (i !== 7) {
        document.querySelector(".mod4").innerHTML += `<li><a href="module4/t${i}/${i}.html">Assignment ${i}</a> ✔️</li>`;
    }
    else {
        document.querySelector(".mod4").innerHTML += `<li><a href="module4/t${i}/${i}.html">Assignment ${i}</a> 😖</li>`;
    }
    
}


