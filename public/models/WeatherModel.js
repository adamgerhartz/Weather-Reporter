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
			let forecastArray = [];
			data.list.forEach(item => {
				forecastArray.push({
					date: this.convertUnixToLocalDate(item.dt),
					temp: item.main.temp
				});
			});
			// splice forecast array into 5 days
			let splicedArray = [];
			while (forecastArray.length) {
				splicedArray.push(forecastArray.splice(0, 8));
			}
			sendForecastArray(null, splicedArray);
		});		
	}

	convertUnixToLocalDate(epoch) {
		let d = new Date(0);
		d.setUTCSeconds(epoch);
		return d;
	}
}