export default class WeatherModel {
	getTemperature(city, sendTemperatureArray) {
		$.get(`/:city`, {city: city}, (data) => {
			console.log(data);
			// TODO
			// const array == [];
			// sendTemperatureArray(array);
		});
	}
}