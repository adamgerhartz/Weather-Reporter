import { getTemperatureObject, getForecastObject, getCurrentLocation } from "./utils/utilities.js";

export default class WeatherModel {
	getTemperature(city, sendTemperatureArray) {
		$.get(`/${city}`, (data) => {
			console.log(data);
			sendTemperatureArray(null, getTemperatureObject(data));
		});
	}

	getWeatherByCurrentLocation(sendWeatherData) {
		getCurrentLocation((position) => {
			if (position.success === false) {
				sendWeatherData(true, null, null);
			}
			$.get(`/coords/${position.coords.latitude}/${position.coords.longitude}`, (tempData) => {
				const tempObject = getTemperatureObject(tempData);
				$.get(`/coords/${position.coords.latitude}/${position.coords.longitude}/forecast`, (forecastData) => {
					const forecastObject = getForecastObject(forecastData);
					sendWeatherData(null, tempObject, forecastObject);
				});	
			});
		});
	}

	getForecast(city, sendForecastArray) {
		$.get(`/${city}/forecast`, (data) => {
			console.log(data);
			sendForecastArray(null, getForecastObject(data));
		});		
	}
}