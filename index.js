const express = require('express');
const path = require('path');
const ejs = require('ejs');
const WeatherController = require('./weather-main/WeatherController');
require('dotenv').config();
const PORT = process.env.PORT || 5000;

console.log(process.env);

express()
	.use(express.static(path.join(__dirname, 'public')))
	.set('views', path.join(__dirname, 'views'))
	.set('view engine', 'ejs')
	.get('/', (req, res) => {
		console.log('Received a request for the root directory')
		const weatherController = new WeatherController('Detroit');
		console.log(process.env.API_KEY);
		weatherController.init();
		res.render('pages/index')
	})
	.listen(PORT, () => console.log(`Listening on ${PORT}`));