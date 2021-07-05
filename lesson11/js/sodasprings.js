const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=30dab8ad616006464c6fcefabccd5254";
const apiURLW = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&appid=41aad7e86df21cc463e072f37de54050";
const imgURL = 'https://openweathermap.org/img/w/'

fetch(apiURLW)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);


    document.querySelector('#condition').textContent = jsObject.weather[0].description;
    document.querySelector('#temp').innerHTML = jsObject.main.temp.toFixed(0) +'&deg;F';
    document.querySelector('#humidity').textContent = jsObject.main.humidity + "%";
    document.querySelector('#windspeed').textContent = jsObject.wind.speed.toFixed(0) + "mph";

    let t = jsObject.main.temp;
    let ws = jsObject.wind.speed;
    
    function windChill(tempF, speed) {
      if (tempF <= 58 && speed > 3) {
          let f = 35.74 + (0.6215 * tempF) - (35.75 * (speed ** 0.16)) + (0.4275 * tempF * (speed ** 0.16));
          return f;
      } else {
          let f = "N/A";
          return f;
  
      }
  }

  let value = windChill(t, ws);
  

  document.getElementById('winchill').textContent = value;

  })




  fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let day = 0;
    

    //Makes the list array 5
    const fiveDayForecast = jsObject.list.filter( forecast => forecast.dt_txt.includes('18:00:00'));
    

    console.log(fiveDayForecast);

    fiveDayForecast.forEach(x => {
      let d = new Date(x.dt_txt);

      let topp = 'https://openweathermap.org/img/w/' + x.weather[0].icon + '.png';
      let desc = x.weather[0].description;


      document.getElementById(`day${day+1}`).textContent = week[d.getDay()];
      document.getElementById(`forecast${day+1}`).innerHTML = x.main.temp +'&deg;F';
      
      document.getElementById(`icon${day+1}`).setAttribute('src', topp);
      document.getElementById(`icon${day+1}`).setAttribute('alt', desc);
      day++;

    });

  });



// SODA SPRINGS EVENTS
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.log(jsonObject);
        const towns = jsonObject['towns'];   

        for (let i = 0; i < towns.length; i++) {

            if (towns[i].name === "Soda Springs") {
                
                let event = document.createElement('section');

                let first = document.createElement('p')
                let second = document.createElement('p')
                let third = document.createElement('p')

                first.textContent = `${towns[i].events[0]} `;
                second.textContent = `${towns[i].events[1]} `;
                third.textContent = `${towns[i].events[2]} `;
                
                event.append(first);
                event.append(second);
                event.append(third)

                document.querySelector('div.events').appendChild(event);
            }
        
        };

    });