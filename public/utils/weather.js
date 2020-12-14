import WeatherController from "../controllers/WeatherController.js";

const weatherController = new WeatherController('main');
window.addEventListener('load', ()=> {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPostion(weatherController.showWeatherForm());
	} else {
		weatherController.showWeatherForm();	
	}
});