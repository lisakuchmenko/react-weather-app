import './App.css';
import Weather from './Weather';

export default function App() {
	return (
		<div className='App'>
			<Weather />
			<p className='text-center mt-2 text-muted code-link'>
				<a
					href='https://github.com/lisakuchmenko/react-weather-app'
					target='_blank'
					rel='noreferrer'
					title='project on GitHub'
				>
					Open-source code
				</a>{' '}
				by Liza Kuchmenko
			</p>
		</div>
	);
}
