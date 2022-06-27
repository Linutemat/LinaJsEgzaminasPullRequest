/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */
'use strict';

 const ENDPOINT = 'cars.json';
 const state = {};

const fetchData = async () => {
    try {
      const response = await fetch(ENDPOINT);
      if (response.ok) {
        state.cars = await response.json();
        populateTable(state.cars);
      }
    } catch (error) {
      console.error(error);
    }
  };



  function populateTable(cars) {
    const divOutput = document.getElementById('output');
    divOutput.innerHTML = '';
    cars.forEach((car) => {
        console.log(car);
        console.log('esu foreache');

        const brand = document.createElement('h2');
        brand.innerText = ` ${car.brand}`;

        const model = document.createElement('p');
        model.innerText = ` ${car.models}`;
        const carCard = document.createElement("div");
        carCard.setAttribute("class", "car-card");
        carCard.append(brand, model);
    divOutput.append(carCard);
     
});
  };
  
  fetchData();
