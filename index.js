require('dotenv').config();
const express = require('express');
const path = require('path');
const ejs = require('ejs');
const WeatherController = require('./weather-main/WeatherController');
const PORT = process.env.PORT || 5000;
console.log(process.env.API_KEY);

express()
	.use(express.static(path.join(__dirname, 'public')))
	.set('views', path.join(__dirname, 'views'))
	// .set('controllers', path.join(__dirname, 'controllers'))
	// .set('models', path.join(__dirname, 'models'))
	.set('view engine', 'ejs')
	.get('/', (req, res) => {
		console.log('Received a request for the root directory')
		const weatherController = new WeatherController('Detroit');
		weatherController.init();
		res.render('pages/index')
	})
	.listen(PORT, () => console.log(`Listening on ${PORT}`));