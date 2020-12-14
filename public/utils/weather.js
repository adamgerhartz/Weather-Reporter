import WeatherController from "../controllers/WeatherController.js";

const weatherController = new WeatherController('main');

const options = {
	enableHighAccuracy: true,
	timeout: 5000,
	maximumAge: 0
}
 
function success(position) {
	console.log(position);
	weatherController.showWeatherForm(position);
}

function error(err) {
	console.warn(`ERROR(${err.code}): ${err.message}`);
	weatherController.showWeatherForm();
} 

window.addEventListener('load', ()=> {
	navigator.geolocation.getCurrentPosition(success, error, options);
});