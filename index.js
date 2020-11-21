const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

import WeatherController from './weather-main/WeatherController.js';

express()
	.use(express.static(path.join(__dirname, 'public')))
	.set('views', path.join(__dirname, 'views'))
	.set('view engine', 'ejs')
	.get('/', (req, res) => {
		console.log('Received a request for the root directory')
		const weatherController = new WeatherController('#weather');
		console.log("Did we make it?");
		weatherController.init();
		res.render('pages/index')
	})
	.listen(PORT, () => console.log(`Listening on ${PORT}`));