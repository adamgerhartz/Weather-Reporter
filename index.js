const express = require('express');
const path = require('path');
const weatherController = require("./controllers/weatherController.js");
require('dotenv').config();
const PORT = process.env.PORT || 5000;

express()
	.use(express.static(path.join(__dirname, 'public')))
	.use(express.json())
	.use(express.urlencoded({ extended: true }))
	.get('/', weatherController.getDefaultWeather)
	.get('/:city', weatherController.getTemperatureByCity)
	.get('/coords/:lat/:lon', weatherController.getTemperatureByCoordinates)
	.get('/coords/:lat/:lon/forecast', weatherController.getForecastByCoordinates)
	.get('/:city/forecast', weatherController.getForecastByCity)
	.listen(PORT, () => console.log(`Listening on ${PORT}`));