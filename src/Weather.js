import React, { useState } from 'react';
import axios from 'axios';
import FormattedDate from './FormattedDate';
import './Weather.css';
import cloudy from './images/cloud.png';

const APIKey = '69eb186cf73c3b669b9897029eabbac6';

export default function Weather() {
	const [weatherData, setWeatherData] = useState({ loaded: false });

	function showData(response) {
		setWeatherData({
			loaded: true,
			date: new Date(response.data.dt * 1000),
			temp: Math.round(response.data.main.temp),
			desc: response.data.weather[0].description,
			humidity: response.data.main.humidity,
			wind: response.data.wind.speed,
			img: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
		});
	}

	function handleSubmit(event) {
		event.preventDefault();
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
							<div className='col-1 ps-0'>
								<button className='btn btn-primary' id='geolocation'>
									<i className='fa-solid fa-location-dot'></i>
								</button>
							</div>
						</div>
						<div className='overview'>
							<h1 id='city'>Paris</h1>
							<ul className='p-0'>
								<li id='description'>Cloudy</li>
								<li className='date-update'>
									Last updated at:{' '}
									<span id='date'>
										<FormattedDate date={weatherData.date} />
									</span>
								</li>
							</ul>
						</div>
						<div className='row'>
							<div className='col-6'>
								<div className='clearfix weather-temperature'>
									<img
										src={cloudy}
										alt='cloudy'
										className='float-start'
										id='icon'
									/>
									<div className='float-start'>
										<span id='temperature'>{weatherData.temp}</span>
										<span className='units'>
											<a href='/' id='celcius' className='active'>
												ºC
											</a>
											|
											<a href='/' id='farenheit'>
												ºF
											</a>
										</span>
									</div>
								</div>
							</div>
							<div className='col-6'>
								<ul className='weather-data'>
									<li>
										Feels like:
										<span id='feels-like'> 23</span>º
									</li>
									<li>
										Humidity:
										<span id='humidity'> 65</span>%
									</li>
									<li>
										Wind:
										<span id='wind'> 5</span> km/h
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		let city = 'paris';
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`;
		axios
			.get(apiUrl)
			.then(showData)
			.catch((error) => console.log(error));
		return <div>Loading...</div>;
	}
}
