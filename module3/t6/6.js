'use strict'

const btn = document.querySelector('button');

function event_handler() {
    alert('Button clicked');
}

btn.addEventListener('click', event_handler);