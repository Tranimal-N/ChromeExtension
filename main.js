const NASA_API_KEY = 'mlKrJKavjhseEuXEhWtBC7t9oluRqNLmIUFHvyyM';

const QUERY = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`;
// const MARS_WEATHER_QUERY = `https://api.nasa.gov/insight_weather/?api_key=${NASA_API_KEY}&feedtype=json&ver=1.0`;
const CODESMITH_SATELITE = `https://api.nasa.gov/DONKI/FLR?startDate=2022-06-01&endDate=2022-06-14&api_key=${NASA_API_KEY}`;

const marsBtn = document.querySelector('.mars-btn');
const flareContainer = document.querySelector('.marsWeather');

marsBtn.addEventListener('click', (event) => {
  event.preventDefault();

  fetch(CODESMITH_SATELITE)
    .then((res) => res.json())
    .then((flares) => {
      console.log(flares);
      marsBtn.remove();

      for (const flare of flares) {
        const flarId = document.createElement('p');
        flarId.innerText = `Flare ID: ${flare.flrID}`;
        const flareInfo = document.createElement('p');
        flareInfo.innerText = `Location on the sun: ${flare.sourceLocation}`;
        flareContainer.appendChild(flarId);
        flareContainer.appendChild(flareInfo);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

fetch(QUERY)
  .then((res) => res.json())
  .then((data) => {
    const img = document.querySelector('.daily-pic');
    const explanation = document.querySelector('.explanation');
    const title = document.querySelector('.title');
    const date = document.querySelector('.date');

    date.innerText = data.date;
    title.innerText = data.title;
    explanation.innerText = data.explanation;
    img.src = data.url;
  })
  .catch((err) => console.log(err));
