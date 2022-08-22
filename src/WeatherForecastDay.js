import React from 'react';
import WeatherIcon from './WeatherIcon';

export default function WeatherForecastDay({ data }) {
	function day() {
		let date = new Date(data.dt * 1000);
		let day = date.getDay();

		let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

		return days[day];
	}
	return (
		<>
			<div className='weather-forecast-day'>{day()}</div>
			<WeatherIcon code={data.weather[0].icon} size={36} />
			<div className='weather-forecast-temp'>
				<span className='weather-forecast-temp-max'>
					{Math.round(data.temp.max)}º |
				</span>
				<span className='weather-forecast-temp-min'>
					{' '}
					{Math.round(data.temp.min)}º
				</span>
			</div>
		</>
	);
}
