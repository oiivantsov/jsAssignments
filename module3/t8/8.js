'use strict'

const button = document.getElementById("start");
const value1 = document.getElementById("num1");
const value2 = document.getElementById("num2");
const option = document.getElementById("operation");
const resultE = document.getElementById("result");

button.addEventListener("click", (evt) => {
        
        // ... prevent the default action.
        evt.preventDefault();

        const calcsResult = calculator(option.value, parseFloat(value1.value), parseFloat(value2.value));

        // result output
        if (calcsResult === false || isNaN(calcsResult))
                resultE.innerHTML = "Wrong input";
        else if (!isFinite(calcsResult)) {
                resultE.innerHTML = "Dividing by 0, try again";
        }
        else {
                resultE.innerHTML = `Result of operation: ${calcsResult} (${option.value})`;
        }



});

function calculator(option, num1, num2) {

        let result;

        switch (option) {
                case "add":
                        result = num1 + num2;
                        break;
                case "sub":
                        result = num1 - num2;
                        break;
                case "multi":
                        result = num1 * num2;
                        break;
                case "div":
                        result = num1 / num2;
                        break;
                default:
                        result = false;
                        break;
        }

        return result;

}