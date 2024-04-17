'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

students.forEach((student) => {
  let optionElement = document.createElement('option');

  optionElement.innerHTML = student.name;
  optionElement.value = student.id;

  document.getElementById("target").appendChild(optionElement);
});

