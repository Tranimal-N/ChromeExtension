const NASA_API_KEY = 'mlKrJKavjhseEuXEhWtBC7t9oluRqNLmIUFHvyyM'

const QUERY = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`;

fetch(QUERY)
	.then((res) => res.json()).then((data) => {
        const img = document.querySelector('.ex-pic');
        const explanation = document.querySelector('.explanation')
        explanation.innerText = data.explanation;
        img.src = data.url;
        console.log(data)
    });

