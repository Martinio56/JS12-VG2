var ansatt = [
    {
        ansatt_id: 1,
        forNavn: "Jorunn",
        etterNavn: "Johnsen",
        alder: 38,
        adress: "100 Internet Dr",
        postNummer: 1383,
        postSted: "Asker",
        jobbNavn: "Manager",
        lønn: 60000,
        state: true,
        phoneNumbers: [
            { "Mobile": "111-111-1111" },
            { "Home": "222-222-2222" }
        ],
        epost: "jorunn@gmail.com",
        navn: function () {
            return this.forNavn+" "+this.etterNavn;
        },
        bildet: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    
    {
        ansatt_id: 2,
        forNavn: "Rasmuss",
        etterNavn: "Rasmussen",
        alder: 28,
        adress: "101 Internet Dr",
        postNummer: 1385,
        postSted: "Asker",
        jobbNavn: "Analyst",
        lønn: 50000,
        state: true,
        phoneNumbers: [
            { "Mobile": "333-111-1111" },
            { "Home": "333-222-2222" }
        ],
        epost: "rasmuss@gmail.com",
        navn: function () {
            return this.forNavn+" "+this.etterNavn;
        },
        bildet: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    
    {
        ansatt_id: 3,
        forNavn: "Andrea",
        etterNavn: "Onstad",
        alder: 30,
        adress: "102 Internet Dr",
        postNummer: 3400,
        postSted: "Lier",
        jobbNavn: "Analyst",
        lønn: 50000,
        state: true,
        phoneNumbers: [
            { "Mobile": "444-111-1111" },
            { "Home": "444-222-2222" }
        ],
        epost: "andrea@gmail.com",
        navn: function () {
            return this.forNavn+" "+this.etterNavn;
        },
        bildet: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    
    {
        ansatt_id: 4,
        forNavn: "Marius",
        etterNavn: "Helseth",
        alder: 25,
        adress: "102 Internet Dr",
        postNummer: 3427,
        postSted: "Gullaug",
        jobbNavn: "kontorist",
        lønn: 40000,
        state: true,
        phoneNumbers: [
            { "Mobile": "555-111-1111" },
            { "Home": "555-222-2222" }
        ],
        epost: "marius@gmail.com",
        navn: function () {
            return this.forNavn+" "+this.etterNavn;
        },
        bildet: "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    
    {
        ansatt_id: 5,
        forNavn: "Tom",
        etterNavn: "Rin Tin Tin",
        alder: 25,
        adress: "104 Internet Dr",
        postNummer: 3427,
        postSted: "Gullaug",
        jobbNavn: "kontorist",
        lønn: 40000,
        state: true,
        phoneNumbers: [
            { "Mobile": "666-111-1111" },
            { "Home": "666-222-2222" }
        ],
        epost: "joris@gmail.com",
        navn: function () {
            return this.forNavn+" "+this.etterNavn;
        },
        bildet: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    
    {
        ansatt_id: 6,
        forNavn: "Jostein",
        etterNavn: "Winsnes",
        alder: 45,
        adress: "105 Internet Dr",
        postNummer: 3400,
        postSted: "Lier",
        jobbNavn: "Manager",
        lønn: 60000,
        state: true,
        phoneNumbers: [
            { "Mobile": "777-111-1111" },
            { "Home": "777-222-2222" }
        ],
        epost: "jostein@gmail.com",
        navn: function () {
            return this.forNavn+" "+this.etterNavn;
        },
        bildet: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    
    {
        ansatt_id: 7,
        forNavn: "Markus",
        etterNavn: "Snare",
        alder: 41,
        adress: "106 Internet Dr",
        postNummer: 3400,
        postSted: "Lier",
        jobbNavn: "portier",
        lønn: 35000,
        state: true,
        phoneNumbers: [
            { "Mobile": "888-111-1111" },
            { "Home": "888-222-2222" }
        ],
        epost: "markus@gmail.com",
        navn: function () {
            return this.forNavn+" "+this.etterNavn;
        },
        bildet: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }
];

//Oppgave 1
console.log("Oppgave 1");
for (let i = 0; i < ansatt.length; i++) {
    console.log(ansatt[i].navn());
}

//Oppgave 2
console.log("\nOppgave 2");
ansatt[1].alder = 29;
console.log(ansatt[1].alder);

//Oppgave 3
console.log("\nOppgave 3");
ansatt[6].phoneNumbers.push({"Bedrift": "888-333-3333" })
for (let i = 0; i < ansatt[6].phoneNumbers.length; i++) {
    console.log(ansatt[6].phoneNumbers[i]);
}

//Oppgave 4
console.log("\nOppgave 4");
delete ansatt[3].epost;
console.log(ansatt[3].epost);

//Oppgave 5
console.log("\nOppgave 5\nPå Dokumentet");
visBilde = () => {
    const div = document.getElementById("bildeDiv");

    for (let i = 0; i < ansatt.length; i++) {
        const img = document.createElement('img');
        img.src = ansatt[i].bildet;
        img.style.width = "200px"
        div.appendChild(img);
    }
}

visBilde();

//Oppgave 6
console.log("\nOppgave 6\nPå Dokumentet");
opg6f = () => {
    const opg6 = document.getElementById("opg6");

    const img = document.createElement("img");
    img.src = ansatt[3].bildet;
    img.style.width = "200px";
    opg6.appendChild(img);
}

opg6f();

//Oppgave 7
console.log("\nOppgave 7\nPå Dokumentet");
opg7f = () => {
    const opg7 = document.getElementById("opg7");

    for (let i = 0; i < ansatt.length; i++) {
        if (ansatt[i].postSted == "Lier") {
            const img = document.createElement("img");
            img.src = ansatt[i].bildet;
            img.style.width = "200px";
            opg7.appendChild(img);
        } else {

        }
    }
}

opg7f();

//Oppgave 8
console.log("\nOppgave8\nPå Dokumentet");
opg8f = () => {
    const opg8 = document.getElementById("opg8");

    for (let i = 0; i < ansatt.length; i++) {
        if (ansatt[i].jobbNavn == "Manager") {
            const img = document.createElement("img");
            img.src = ansatt[i].bildet;
            img.style.width = "200px";

            const navn = document.createElement("p");
            navn.textContent = ansatt[i].navn();

            opg8.appendChild(img);
            opg8.appendChild(navn);
        }
    }
}

opg8f();