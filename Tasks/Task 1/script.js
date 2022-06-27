/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
'use strict';

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const inputKg = document.getElementById('search');
    const inputKgValue = inputKg.value;
    
    const lbConcertCoeficient = 2.2046;
    const gConcertCoeficient = 1000;
    const ozConcertCoeficient = 35.274;
 
    const convertToLb = (inputKgValue*lbConcertCoeficient).toFixed(2);
    const convertToG = (inputKgValue*gConcertCoeficient).toFixed(2);
    const convertToOz =(inputKgValue*ozConcertCoeficient).toFixed(2);
    
    const resultPopulate = document.getElementById('output');
    const result = document.createElement('h3');
   result.innerHTML =  `<h3>Result:</h3>`
    const resultElement = document.createElement('ul');
    resultElement.innerHTML = `
    <ul>
               
                <li>Pounds:
                ${convertToLb}</li>
                <li>Grams:
                ${convertToG}</li>
                <li>Ounces:
                ${convertToOz}</li>
    </ul> `;
    const resultCard = document.createElement("div");
    resultCard.setAttribute("class", "resultCard");
    resultCard.append(result, resultElement);
    resultPopulate.append(resultCard);
  
  });







