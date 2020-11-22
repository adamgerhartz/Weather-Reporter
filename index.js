const express = require('express');
const path = require('path');
const ejs = require('ejs');
const WeatherModel = require('./api/Weather');
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const defaultCity = 'New York';
const weather = new WeatherModel();

express()
	.use(express.static(path.join(__dirname, 'public')))
	.set('views', path.join(__dirname, 'views'))
	.set('view engine', 'ejs')
	.get('/', (req, res) => {
		console.log('Received a request for the root directory')
		const data = weather.getWeatherByCity(defaultCity)
			.then(data => {
				res.render('pages/index', {
					temp: data.main.temp,
					name: data.name
				})
			});		
	})
	.get('/:city', (req, res) => {
		const city = req.params['city'];
		const data = weather.getWeatherByCity(city)
			.then(data => {
				res.render('pages/index', {
					temp: data.main.temp,
					name: data.name
				})
			});

	})
	.listen(PORT, () => console.log(`Listening on ${PORT}`));