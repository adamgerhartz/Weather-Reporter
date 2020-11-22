const express = require('express');
const path = require('path');
const ejs = require('ejs');
const WeatherModel = require('./api/Weather');
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const defaultCity = 'New York';

express()
	.use(express.static(path.join(__dirname, 'public')))
	.set('views', path.join(__dirname, 'views'))
	.set('view engine', 'ejs')
	.get('/', (req, res) => {
		console.log('Received a request for the root directory')
		const weather = new WeatherModel();
		const data = weather.getWeatherByCity(defaultCity);
		console.log(data);
		res.render('pages/index', {
			temp: data.main.temp
		})			
	})
	.listen(PORT, () => console.log(`Listening on ${PORT}`));