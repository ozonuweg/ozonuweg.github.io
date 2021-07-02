// Get time last modified 
document.querySelector('#lastmod').textContent = document.lastModified;


// Get full date in this format: Saturday, 24 May 2020
let daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
let months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
let d = new Date();
let dayName = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let year = d.getFullYear();
let fulldate = dayName + ", " + d.getDate() + " " + monthName + " " + year;
document.querySelector('#currentdate').textContent = fulldate;



// Responsive menu
function toggleMenu() {
    document.getElementsByClassName("nav-bar")[0].classList.toggle("responsive");
}



// Towns Data for HomePage
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
                let info = document.createElement('section');
                let writings = document.createElement('div');
                let pictures = document.createElement('div');
                let h2 = document.createElement('h2');
                let spn = document.createElement('span');
                let motto = document.createElement('p');
                let year = document.createElement('p');
                let img = document.createElement('img');
                let population = document.createElement('p');
                let rainfall = document.createElement('p');

                h2.innerHTML = `${towns[i].name} <span class="black"></span>`;
                spn.innerHTML = `${towns[i].motto} <span class="black"></span>`;
                year.innerHTML = `Year Founded: ${towns[i].yearFounded} <span class="black"></span>`;
                population.innerHTML = `Population: ${towns[i].currentPopulation} <span class="black"></span>`;
                rainfall.innerHTML = `Annual Rain: ${towns[i].averageRainfall} <span class="black"></span>`;
                img.setAttribute('src', "images/"+towns[i].photo);
                img.setAttribute ('class', 'image1size')
                img.setAttribute('Alt', `The offical portrait of ${towns[i].name}!`);
                writings.setAttribute('class', 'writings');
                info.setAttribute('class', 'info')

               

                writings.append(h2);
                writings.append(spn);
                writings.append(motto);
                writings.append(year);
                writings.append(population);
                writings.append(rainfall);
                pictures.append(img)
                info.append(pictures);
                info.append(writings);

                document.querySelector('#towns').append(info);
            }

            
        };




    });