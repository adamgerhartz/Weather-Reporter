import WeatherController from "../controllers/WeatherController.js";

const weatherController = new WeatherController('main');
window.addEventListener('load', ()=> {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPostion(weatherController.showWeatherForm(position));
	} else {
		weatherController.showWeatherForm();	
	}
});