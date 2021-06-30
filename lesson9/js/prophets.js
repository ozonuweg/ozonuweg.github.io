const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) { 
        const prophets = jsonObject["prophets"];

        for (let i = 0; i < prophets.length; i++) {
            let card = document.createElement("section");
            let h2 = document.createElement("h2");
            let birthDay = document.createElement("p");
            let birthLocation = document.createElement("p");
            let img = document.createElement("img");

            h2.textContent = prophets[i].name + " " + prophets[i].lastname;
            birthDay.textContent = "Date of Birth:" + " " + prophets[i].birthdate;
            birthLocation.textContent = "Place of Birth:" + " " + prophets[i].birthplace;
            img.setAttribute("src", prophets[i].imageurl);
            img.setAttribute("alt", h2.value + " " + "-" + " " + prophets[i].order);

            card.appendChild(h2);
            card.appendChild(birthDay);
            card.appendChild(birthLocation);
            card.appendChild(img);

            document.querySelector("div.cards").appendChild(card);
        }

    });