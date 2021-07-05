const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=30dab8ad616006464c6fcefabccd5254";
const apiURLW = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=41aad7e86df21cc463e072f37de54050";
const imgURL = 'https://openweathermap.org/img/w/'

fetch(apiURLW)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);


    document.querySelector('#condition').textContent = jsObject.weather[0].description;
    document.querySelector('#temp').innerHTML = jsObject.main.temp.toFixed(0);
    document.querySelector('#humidity').textContent = jsObject.main.humidity;
    document.querySelector('#windspeed').textContent = jsObject.wind.speed.toFixed(0);

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
.then(res => {
	return res.json()
})
.then(jsonData => {
	jsonData.list.filter(item => item['dt_txt'].includes('18:00:00'))
		.forEach((elem,index) => {

			document.querySelector('#day'+(index+1)+' + .weather-icon')
			.innerHTML = '<img src=\''+imgURL+elem.weather[0].icon+'.png\'>'
			document.querySelector('#day'+(index+1)+' ~ span')
				.innerHTML = elem.main.temp.toFixed(0) +'&deg;F'
		});
});




// PRESTON EVENTS
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.log(jsonObject);
    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++) {

      if (towns[i].name === "Preston") {

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