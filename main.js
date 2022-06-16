const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'iss-location.p.rapidapi.com'
	}
};

fetch('https://iss-location.p.rapidapi.com/get', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));