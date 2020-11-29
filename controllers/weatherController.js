const WeatherModel = require('../api/Weather');
const weather = new WeatherModel();
const defaultCity = "New York";

function getDefaultWeather(req, res) {
	console.log('Received a request for the root directory')
	weather.getWeatherByCity(defaultCity, (err, results) => {
		res.json(results);
	});
}

function getTemperatureByCity(req, res) {
	let city = req.query['city'];
	if (city === undefined) {
		city = "Detroit";
	}
	console.log(city);
	weather.getWeatherByCity(city, (err, results) => {
		res.json(results);
	});
}

module.exports = {
	getDefaultWeather: getDefaultWeather,
	getTemperatureByCity: getTemperatureByCity
}