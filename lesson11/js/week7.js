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






// Use local storage to display the amount of time in days between user visits
// Function to get difference in days
function getNumberOfDays(start, end) {

	// One day in milliseconds
	const oneDay = 1000 * 60 * 60 * 24;
 
	// Calculate the time difference between dates
	const diffInTime = end - start;
 
	// Calculate the number of days between the dates
	const diffInDays = Math.round(diffInTime / oneDay);
 
	return diffInDays;
 }

 // Pull last visited from local storage
const lastVisit = localStorage.getItem('last-visit') || Date.now();

// Get the number of days
const daysSinceLastVisit = getNumberOfDays(lastVisit, Date.now());

// Set number of days into the DOM
document.querySelector('.last-visit span').innerHTML = daysSinceLastVisit;

// Update local storage with the current time stamp
localStorage.setItem('last-visit', Date.now());






// Responsive menu
function toggleMenu() {
    document.getElementsByClassName("nav-bar")[0].classList.toggle("responsive");
}