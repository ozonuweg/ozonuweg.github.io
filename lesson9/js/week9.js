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
const townDataURL = 'https://byui-cit230.github.io/weather/data/towndata.json'
const towns2get = [
    'Preston',
    'Fish Haven',
    'Soda Springs'
]

fetch(townDataURL)
    .then((response) => {
        return response.json()
    })
    .then((jsonData) => {
        jsonData['towns'].filter(item => towns2get.includes(item.name))
            .forEach(town => {
                let i = town.photo
                let n = town.name
                let m = town.motto
                let f = town.yearFounded
                let p = town.currentPopulation
                let r = town.averageRainfall
                
                let div = document.createElement('div')
                let img = document.createElement('img')
                let sect = document.createElement('section')
                let h2 = document.createElement('h2')
                let spn = document.createElement('span')
                let p1 = document.createElement('p')
                let p2 = document.createElement('p')
                let p3 = document.createElement('p')

                img.setAttribute('src','./images/'+i)
                img.setAttribute('alt','header image for '+n)
                h2.textContent = n
                spn.textContent = m
                p1.textContent = 'Year Founded: '+f
                p2.textContent = 'Population: '+p
                p3.textContent = 'Annual Rain Fall: '+r
                sect.appendChild(h2)
                sect.appendChild(spn)
                sect.appendChild(p1)
                sect.appendChild(p2)
                sect.appendChild(p3)
                div.appendChild(img)
                div.appendChild(sect)
                document.querySelector('#towns').appendChild(div)
            })
    })











	
$(document).ready(function() {
  navigator.geolocation.getCurrentPosition(success, error);

  function success(pos) {
    var lat = pos.coords.latitude;
    var long = pos.coords.longitude;
    weather(lat, long);
  }

  function error() {
    console.log("There was an error");
  }

  function weather(lat, long) {
    var URL = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;
    $.getJSON(URL, function(data) {
      display(data);
    });
  }

  function display(data) {
    var city = data.name.toUpperCase();
    var temp =
      Math.round(data.main.temp_max) +
      "&deg; C | " +
      Math.round(Math.round(data.main.temp_max) * 1.8 + 32) +
      "&deg; F";
    var desc = data.weather[0].description;
    var date = new Date();

    var months = [
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

    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var font_color;
    var bg_color;
    if (Math.round(data.main.temp_max) > 25) {
      font_color = "#d36326";
      bg_color = "#f3f5d2";
    } else {
      font_color = "#44c3de";
      bg_color = "#eff3f9";
    }

    if (data.weather[0].main == "Sunny" || data.weather[0].main == "sunny") {
      $(".weathercon").html(
        "<i class='fas fa-sun' style='color: #d36326;'></i>"
      );
    } else {
      $(".weathercon").html(
        "<i class='fas fa-cloud' style='color: #44c3de;'></i>"
      );
    }

    var minutes =
      date.getMinutes() < 11 ? "0" + date.getMinutes() : date.getMinutes();
    var date =
      weekday[date.getDay()].toUpperCase() +
      " | " +
      months[date.getMonth()].toUpperCase().substring(0, 3) +
      " " +
      date.getDate() +
      " | " +
      date.getHours() +
      ":" +
      minutes;
    $(".location").html(city);
    $(".temp").html(temp);
    $(".date").html(date);
    $(".box").css("background", bg_color);
    $(".location").css("color", font_color);
    $(".temp").css("color", font_color);
  }
});