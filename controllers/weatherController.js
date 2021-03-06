const WeatherModel = require('../api/Weather');
const htmlspecialchars = require('htmlspecialchars');
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
	const city = htmlspecialchars(req.params['city']);
	console.log(city);
	weather.getWeatherByCity(city)
		.then(data => {
			res.json(data);
		});
}

function getForecastByCity(req, res) {
	const city = htmlspecialchars(req.params['city']);
	console.log(city);
	weather.getForecastByCity(city)
		.then(data => {
			console.log(data);
			res.json(data);
		});
}

function getTemperatureByCoordinates(req, res) {
	const lat = htmlspecialchars(req.params['lat']);
	const lon = htmlspecialchars(req.params['lon']);
	weather.getWeatherByCoordinates(lat, lon)
		.then(data => {
			res.json(data);
		});
}

function getForecastByCoordinates(req, res) {
	const lat = htmlspecialchars(req.params['lat']);
	const lon = htmlspecialchars(req.params['lon']);
	weather.getForecastByCoordinates(lat, lon)
		.then(data => {
			console.log(data);
			res.json(data);
		})
}

module.exports = {
	getDefaultWeather: getDefaultWeather,
	getTemperatureByCity: getTemperatureByCity,
	getForecastByCity: getForecastByCity,
	getTemperatureByCoordinates: getTemperatureByCoordinates,
	getForecastByCoordinates: getForecastByCoordinates
}