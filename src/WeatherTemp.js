import React, { useState } from 'react';

export default function WeatherTemp({ celcius }) {
	const [unit, setUnit] = useState('celcius');

	function convertToFarenheit(event) {
		event.preventDefault();
		setUnit('farenheit');
	}

	function convertToCelcius(event) {
		event.preventDefault();
		setUnit('celcius');
	}

	if (unit === 'celcius') {
		return (
			<>
				{' '}
				<span id='temperature'>{celcius}</span>
				<span className='units'>
					<span id='celcius' className='active'>
						ºC
					</span>
					|
					<a href='/' id='farenheit' onClick={convertToFarenheit}>
						ºF
					</a>
				</span>
			</>
		);
	} else {
		let farenheit = Math.round(celcius * 1.8 + 32);
		return (
			<>
				{' '}
				<span id='temperature'>{farenheit}</span>
				<span className='units'>
					<a href='/' id='celcius' onClick={convertToCelcius}>
						ºC
					</a>
					|
					<span id='farenheit' className='active'>
						ºF
					</span>
				</span>
			</>
		);
	}
}
