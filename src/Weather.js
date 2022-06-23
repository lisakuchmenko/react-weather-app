import React from 'react';
import './Weather.css';
import cloudy from './images/cloud.png';

export default function Weather() {
	return (
		<div className='container'>
			<div className='weather-app-wrapper'>
				<div className='weather-app'>
					<div className='row'>
						<div className='col-11'>
							<form id='search-form' className='mb-4'>
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
						<ul>
							<li id='description'>Cloudy</li>
							<li className='date-update'>
								Last updated at: <span id='date'>14:28</span>
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
									<span id='temperature'>23</span>
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
}
