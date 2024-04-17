'use strict'

const button = document.getElementById("start");
const inputE = document.getElementById("calculation");
const resultE = document.getElementById("result");

const signs = ["+", "-", "*", "/"];

let calcsSign;
let charElements;
let calcsResult;

button.addEventListener("click", (evt) => {
        
        // ... prevent the default action.
        evt.preventDefault();

        // check for sign + calcs
        signs.forEach((sign) => {

            if (inputE.value.includes(sign)) {

                charElements = inputE.value.split(sign);
                calcsSign = sign;
            }

        });

        // calcs
        calcsResult = calculator(
            calcsSign, 
            parseFloat(charElements[0]), 
            parseFloat(charElements[charElements.length - 1])
        );

        // result output
        if (calcsResult === false || isNaN(calcsResult))
                resultE.innerHTML = "Wrong input";
        else if (!isFinite(calcsResult)) {
                resultE.innerHTML = "Dividing by 0, try again";
        }
        else {
                resultE.innerHTML = `Result of operation: ${calcsResult}`;
        }


});

function calculator(option, num1, num2) {

    let result;

    switch (option) {
            case "+":
                    result = num1 + num2;
                    break;
            case "-":
                    result = num1 - num2;
                    break;
            case "*":
                    result = num1 * num2;
                    break;
            case "/":
                    result = num1 / num2;
                    break;
            default:
                    result = false;
                    break;
    }

    return result;

}