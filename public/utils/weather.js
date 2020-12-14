import WeatherController from "../controllers/WeatherController.js";

const weatherController = new WeatherController('main');
window.addEventListener('load', ()=> {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(weatherController.showWeatherForm());
	} else {
		weatherController.showWeatherForm();	
	}
});