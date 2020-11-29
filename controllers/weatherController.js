const WeatherModel = require('../api/Weather');
const weather = new WeatherModel();
const defaultCity = "New York";

function getDefaultWeather(req, res) {
	console.log('Received a request for the root directory')
	weather.getWeatherByCity(defaultCity)
		.then(data => {
			res.json(data);
		});
}

function getTemperatureByCity(req, res) {
	const city = req.params['city'];
	console.log(city);
	weather.getWeatherByCity(city)
		.then(data => {
			res.json(data);
		});
}

module.exports = {
	getDefaultWeather: getDefaultWeather,
	getTemperatureByCity: getTemperatureByCity
}