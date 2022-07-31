import React from 'react';
import FormattedDate from './FormattedDate';

export default function WeatherInfo({ data }) {
	return (
		<>
			<div className='overview'>
				<h1 id='city'>{data.city}</h1>
				<ul className='p-0'>
					<li id='description'>Cloudy</li>
					<li className='date-update'>
						Last updated at:{' '}
						<span id='date'>
							<FormattedDate date={data.date} />
						</span>
					</li>
				</ul>
			</div>
			<div className='row'>
				<div className='col-6'>
					<div className='clearfix weather-temperature'>
						<img
							src={data.img}
							alt={data.desc}
							className='float-start'
							id='icon'
						/>
						<div className='float-start'>
							<span id='temperature'>{data.temp}</span>
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
							<span id='feels-like'> {data.feelsLike}</span>º
						</li>
						<li>
							Humidity:
							<span id='humidity'> {data.humidity}</span>%
						</li>
						<li>
							Wind:
							<span id='wind'> {data.wind}</span> km/h
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
