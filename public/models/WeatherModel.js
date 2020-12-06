export default class WeatherModel {
	getTemperature(city, sendTemperatureArray) {
		$.get(`/${city}`, (data) => {
			console.log(data);
			const tempObject = {
				"name": data.name,
				"temp": data.main.temp,
				"feels_like": data.main.feels_like
			};
			sendTemperatureArray(null, tempObject);
		});
	}

	getForecast(city, sendForecastArray) {
		$.get(`/${city}/forecast`, (data) => {
			console.log(data);
			const tempObject = {
				"success": true
			}
			sendForecastArray(null, tempObject);
		});
		
	}
}