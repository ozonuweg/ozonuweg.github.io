// Events List for Town Pages
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);  // temporary checking for valid response and data parsing
        console.log(jsonObject);
        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {

            if (towns[i].name === "Soda Springs" || towns[i].name === "Fish Haven" || towns[i].name === "Preston") {
                let spn = document.createElement('span');

                spn.innerHTML = `${towns[i].events} <span class="black"></span>`;

                spn.setAttribute ('class', 'events');

                document.querySelector('#events').append(spn);
            }

            
        };




    });