const url = "http://worldtimeapi.org/api/timezone/";

const dropdown = document.getElementById("dropdown");
const clockTime = document.getElementById("time");
const timeContinent = document.getElementById("timezone-continent");
const timeCity = document.getElementById("timezone-city");
const clockUTC = document.getElementById("UTC");


dropdown.addEventListener("change", () => {
  console.log(dropdown.value);
  worldtimeapiFetch(url + dropdown.value);
});

const worldtimeapiFetch = function (url) {
  fetch(url) //fetcher url
    .then((res) => res.json()) //laver response om til json
    .then((res) => {
      let clockdatetime = res.datetime.split("T") [1]; //sorterer til og med T fra. bliver splittet op i to arrays. ét array fra 2022->T, og ét fra klokkesæt til slut. vil have fat i andet array, derfor [1]
      clockdatetime = clockdatetime.split(".") [0];

      console.log(res);
      clockTime.textContent = (clockdatetime); //her finder vi const metoden fra linje 4, som finder time i HTML'en.

      let clockZone = res.timezone.split("/"); //splitter continent/city
      timeContinent.textContent = clockZone[0];
      timeCity.textContent = clockZone[1];

      clockUTC.textContent = res.utc_offset + " UTC";

    });
};
