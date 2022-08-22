import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import WeatherForecastDay from './WeatherForecastDay';
const apiKey = '4c6c3c4d65043e72ce4d5af49726feb8';

export default function WeatherForecast({ coord }) {
	let [loaded, setLoaded] = useState(false);
	let [forecast, setForecast] = useState(null);

	useEffect(() => {
		setLoaded(false);
	}, [coord]);

	function handleResponse(response) {
		setForecast(response.data.daily);
		setLoaded(true);
	}

	function load() {
		let longitude = coord.lon;
		let latitude = coord.lat;
		let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

		axios.get(apiUrl).then(handleResponse);
	}

	if (loaded) {
		return (
			<div className='forecast'>
				<div className='row justify-content-between'>
					{forecast.map(function (dailyForecast, idx) {
						if (idx < 6) {
							return (
								<div className='col weather-tab' key={idx}>
									<WeatherForecastDay data={dailyForecast} />
								</div>
							);
						} else {
							return null;
						}
					})}
				</div>
			</div>
		);
	} else {
		load();

		return null;
	}
}
