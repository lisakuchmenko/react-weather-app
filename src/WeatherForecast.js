import React from 'react';
import axios from 'axios';
const apiKey = '69eb186cf73c3b669b9897029eabbac6';

export default function WeatherForecast({ coord }) {
	function handleResponse(response) {
		console.log(response.data);
	}

	let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&appid=${apiKey}&units=metric`;

	axios
		.get(apiUrl)
		.then(handleResponse)
		.catch((error) => console.log(error));

	return <div>WeatherForecast</div>;
}
