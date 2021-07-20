// WEATHER URL IN WARRI DELTA STATE WITH THE LATITUDE AND LOGITUDE INCLUDING MY API KEY
const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=5.554399&lon=5.793201&appid=6aacbe3992a7c304c7c38a3f07ca053f";


// CURRENT WEATHER SUMMARY
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        document.getElementById('condition').textContent = jsObject.current.weather[0].description;
        document.getElementById('temperature').innerHTML = (jsObject.current.temp - 273.15).toFixed(2) + "&deg; C";
        document.getElementById('feels-like').innerHTML = (jsObject.current.feels_like - 273.15).toFixed(2) + "&deg; C";
        document.getElementById('humidity').textContent = jsObject.current.humidity + "%";
    });


// THREE DAY WEATHER FORECAST
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {

     const weekday = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
     let day = 1;
 
     // sort the daily forecast into the next three days aside the current day
     const threedaysForecast = [ jsObject.daily[1], jsObject.daily[2], jsObject.daily[3] ];
 
     threedaysForecast.forEach(x => {
       let d = new Date(x.dt * 1000);
       document.getElementById(`day${day}`).innerHTML = weekday[d.getDay()];
       document.getElementById(`temperature${day}`).innerHTML = x.temp.day;
       day++;
     });
 });
