import WeatherController from "../controllers/WeatherController.js";

const weatherController = new WeatherController('main');
window.addEventListener('load', ()=> {
	weatherController.showWeatherForm();
});