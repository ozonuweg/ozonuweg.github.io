fetch('./data/directory.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) { 
        const local_businesses = jsonObject["wccdirectory"];

        for (let i = 0; i < local_businesses.length; i++) {
            let card = document.createElement("section");
            let h2 = document.createElement("h2");
            let address = document.createElement("p");
            let phonenumber = document.createElement("p");
            let link = document.createElement("a");

            h2.textContent = local_businesses[i].name;
            address.textContent = local_businesses[i].address;
            phonenumber.textContent = local_businesses[i].phonenumber;
            link.textContent = local_businesses[i].link;

            link.setAttribute('href', local_businesses[i].link);
            link.setAttribute('target', '_blank');

            card.appendChild(h2);
            card.appendChild(address);
            card.appendChild(phonenumber);
            card.appendChild(link);

            document.querySelector("div.cards").appendChild(card);
        }

    });