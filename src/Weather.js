import React, { useState } from 'react';
import axios from 'axios';
import WeatherInfo from './WeatherInfo';
import './Weather.css';

const APIKey = '69eb186cf73c3b669b9897029eabbac6';

export default function Weather({ defaultCity }) {
	const [weatherData, setWeatherData] = useState({ loaded: false });
	const [city, setCity] = useState(defaultCity);

	function showData(response) {
		setWeatherData({
			loaded: true,
			city: response.data.name,
			date: new Date(response.data.dt * 1000),
			temp: Math.round(response.data.main.temp),
			feelsLike: Math.round(response.data.main.feels_like),
			desc: response.data.weather[0].description,
			humidity: response.data.main.humidity,
			wind: response.data.wind.speed,
			// img: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
			icon: response.data.weather[0].icon,
		});
	}

	function search() {
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`;
		axios
			.get(apiUrl)
			.then(showData)
			.catch((error) => console.log(error));
	}

	function handleSubmit(event) {
		event.preventDefault();
		search();
	}

	function handleCityChange(event) {
		setCity(event.target.value);
	}
	if (weatherData.loaded) {
		return (
			<div className='container'>
				<div className='weather-app-wrapper'>
					<div className='weather-app'>
						<div className='row'>
							<div className='col-11'>
								<form id='search-form' className='mb-4' onSubmit={handleSubmit}>
									<div className='row'>
										<div className='col-9'>
											<input
												type='search'
												placeholder='Enter a city here'
												className='form-control'
												id='city-input'
												autoComplete='off'
												onChange={handleCityChange}
											/>
										</div>
										<div className='col-3'>
											<input
												type='submit'
												className='btn btn-primary w-100'
												value='Search'
											/>
										</div>
									</div>
								</form>
							</div>
							{/* <div className='col-1 ps-0'>
								<button className='btn btn-primary' id='geolocation'>
									<i className='fa-solid fa-location-dot'></i>
								</button>
							</div> */}
						</div>
						<WeatherInfo data={weatherData} />
					</div>
				</div>
			</div>
		);
	} else {
		search();
		return <div>Loading...</div>;
	}
}
