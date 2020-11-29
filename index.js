const express = require('express');
const path = require('path');
const weatherController = require("./controllers/weatherController.js");
require('dotenv').config();
const PORT = process.env.PORT || 5000;

express()
	.use(express.static(path.join(__dirname, 'public')))
	.use(express.json())
	.use(express.urlencoded({ extended: true }))
	.get('/', weatherController.getTemperatureByCity)
	//.get('/:city', weatherController.getTemperatureByCity)
	.listen(PORT, () => console.log(`Listening on ${PORT}`));