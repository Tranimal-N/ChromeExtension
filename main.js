const NASA_API_KEY = 'mlKrJKavjhseEuXEhWtBC7t9oluRqNLmIUFHvyyM';

const QUERY = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`;
// const MARS_WEATHER_QUERY = `https://api.nasa.gov/insight_weather/?api_key=${NASA_API_KEY}&feedtype=json&ver=1.0`;
const CODESMITH_SATELITE = `https://api.nasa.gov/DONKI/FLR?startDate=2022-06-01&endDate=2022-06-14&api_key=${NASA_API_KEY}`;

const flaresBtn = document.querySelector('.solar-flares-btn');
const flareContainer = document.querySelector('.more-btns');
const explanation = document.querySelector('.explanation');

const img = document.querySelector('.daily-pic');
const title = document.querySelector('.title');
const date = document.querySelector('.date');

flaresBtn.addEventListener('click', (event) => {
  event.preventDefault();

  fetch(CODESMITH_SATELITE)
    .then((res) => res.json())
    .then((flares) => {
      console.log(flares);

      img.style.display = 'none'
      title.style.display = 'none'

      
      explanation.innerText = '';
      for (const flare of flares) {
        const flareId = document.createElement('p');
        // flarId.className = "flares-text";
        flareId.innerText = `Flare ID: ${flare.flrID}`;

        const flareInfo = document.createElement('p');
        flareInfo.className = "sun-location";
        flareInfo.innerText = `Location on the sun: ${flare.sourceLocation}`;

        const peakTime = document.createElement('p');
        peakTime.className = 'peak-time';
        peakTime.innerText = `Peak Time: ${flare.peakTime}`;

        const beginTime = document.createElement('p');
        beginTime.className = 'begin-time';
        beginTime.innerText = `Begin Time: ${flare.beginTime}`;

        const endTime = document.createElement('p');
        endTime.className = 'end-time';
        endTime.innerText = `End Time: ${flare.endTime}`;

        const observedFrom = document.createElement('p');
        observedFrom.className = 'end-time';
        observedFrom.innerText = 'Observed From: Kaui, HI';

        const line = document.createElement('hr');


        const recentFlares = document.createElement('h2');
        recentFlares.innerText = 'Recent Flares'


        explanation.appendChild(recentFlares);
        explanation.appendChild(flareId);
        explanation.appendChild(flareInfo);
        explanation.appendChild(beginTime);
        explanation.appendChild(peakTime);
        explanation.appendChild(endTime);
        explanation.appendChild(observedFrom);
        explanation.appendChild(line);

        
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

let dateData;
let titleData;
let explanationData;
let imgData;

const pageHeader = document.querySelector('.page-header');
pageHeader.addEventListener('click', (event) => {
  title.style.display = 'block'
  img.style.display = 'inline'
  date.innerText = dateData;
  title.innerText = titleData;
  explanation.innerText = explanationData;
  img.src = imgData;
})



fetch(QUERY)
  .then((res) => res.json())
  .then((data) => {

    dateData = data.date;
    titleData = data.title;
    explanationData = data.explanation;
    imgData = data.url;
    
    date.innerText = data.date;
    title.innerText = data.title;
    explanation.innerText = data.explanation;
    img.src = data.url;
  })
  .catch((err) => console.log(err));


  // const astroids = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-06-10&end_date=2022-06-15&api_key=${NASA_API_KEY}`

  // fetch(astroids).then((res => res.json())).then(data => console.log(data))