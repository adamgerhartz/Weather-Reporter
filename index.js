const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

import WeatherModel from 'WeatherModel.js';

express()
	.use(express.static(path.join(__dirname, 'public')))
	.set('views', path.join(__dirname, 'views'))
	.set('view engine', 'ejs')
	.get('/', (req, res) => {
		console.log('Received a request for the root directory')
		res.render('pages/index')
	})
	.listen(PORT, () => console.log(`Listening on ${PORT}`));