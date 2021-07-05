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

const banner = document.querySelector(".pancakeBanner");

if (dayName == "Friday"){
    banner.style.display = "block";
}

else {
    banner.style.display = "none";
}

/* For the 5-day weather forecast */
var days = [
    "Sun",
    "Mon",
    "Tues",
    "Wed",
    "Thurs",
    "Fri",
    "Sat"
]
var today = new Date().getDay()
for (let i = 0; i<5; i++) {
    document.getElementById("day"+(i+1)).innerHTML = days[(today+i)%days.length]
}