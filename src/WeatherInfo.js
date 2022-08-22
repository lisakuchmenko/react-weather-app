import React from 'react';
import FormattedDate from './FormattedDate';
import WeatherIcon from './WeatherIcon';
import WeatherTemp from './WeatherTemp';

export default function WeatherInfo({ data }) {
	return (
		<>
			<div className='overview'>
				<h1 id='city'>{data.city}</h1>
				<ul className='p-0'>
					<li id='description'>{data.desc}</li>
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
						<div className='float-start' id='icon'>
							<WeatherIcon code={data.icon} />
						</div>

						<div className='float-start'>
							<span id='temperature'>{data.temp}</span>
							<span className='units'>
								<span id='celcius' className='active'>
									ºC
								</span>
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
