import { getTemperatureObject, getForecastObject } from "./utils/utilities.js";

export default class WeatherModel {
	getTemperature(city, sendTemperatureArray) {
		$.get(`/${city}`, (data) => {
			console.log(data);
			sendTemperatureArray(null, getTemperatureObject(data));
		});
	}

	getWeatherByCoordinates(coords, sendWeatherData) {
		$.get(`/coords/${coords.latitude}/${coords.longitude}`, (tempData) => {
			const tempObject = getTemperatureObject(tempData);
			$.get(`/coords/${coords.latitude}/${coords.longitude}/forecast`, (forecastData) => {
				const forecastObject = getForecastObject(forecastData);
				sendWeatherData(null, tempObject, forecastObject);
			});
		})
	}

	getForecast(city, sendForecastArray) {
		$.get(`/${city}/forecast`, (data) => {
			console.log(data);
			sendForecastArray(null, getForecastObject(data));
		});		
	}
}