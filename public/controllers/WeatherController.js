import WeatherModel from "../models/WeatherModel.js";
import WeatherView from "../views/WeatherView.js";
import ValidationHelper from "./utils/ValidationHelper.js";

export default class WeatherController {
	constructor(parentId) {
		this.parentElement = document.getElementById(parentId);
		this.weatherModel = new WeatherModel();
		this.weatherView = new WeatherView(this.parentElement);
		this.validationHelper = new ValidationHelper();
		this.cityEl = '';
	}

	showWeatherForm() {
		navigator.geolocation.watchPosition(() => {
			this.displayCurrentWeather();
		}, (error) => {
			if (error.code == error.PERMISSION_DENIED) {
				this.weatherView.stopProgress(document.getElementById("results"));
			}
		});
		this.weatherView.renderProgress(document.getElementById("results"));
		this.weatherView.renderForm((cityElement) => {
			this.cityEl = cityElement;
			this.addWeatherListeners();
		});
	}

	addWeatherListeners() {
		// city
		this.cityEl.addEventListener('keydown', () => {
			this.weatherView.hideErrorMessages();
		});
		this.cityEl.addEventListener("keyup", (event) => {
			if (event.target.value != '') {
				const isValidEntry = this.validationHelper.isValidEntry(event.target.value);
				if (!isValidEntry && !this.weatherView.isErrorDisplayed()) {
					this.weatherView.renderError('city');
				} else if (isValidEntry && this.weatherView.isErrorDisplayed()) {
					this.weatherView.hideErrorMessages();
				}
			}
		});

		// submit
		this.parentElement.addEventListener('submit', (event) => {
			event.preventDefault();
			const city = event.target[0].value;
			const isEmptyCity = this.validationHelper.isEmpty(city);
			if (isEmptyCity || this.weatherView.isErrorDisplayed()) {
				if (isEmptyCity) {
					this.weatherView.renderError('city-e');
				}
				return;
			}

			if (!isEmptyCity && this.validationHelper.isValidEntry(city)) {
				this.weatherModel.getTemperature(city, (err, results) => {
					if (err) {
						this.weatherView.renderError("city-no");
					}
					const element = document.getElementById("results");
					this.weatherView.renderTemperature(element, results);
				});
				this.weatherModel.getForecast(city, (err, results) => {
					if (err) {
						this.weatherView.renderError("city-no");
					}
					const element = document.getElementById("results");
					this.weatherView.renderForecast(element, results);
				});
			}
		});
	}

	displayCurrentWeather() {
		//TODO this.weatherView.renderProgressSpinner();
		this.weatherModel.getWeatherByCurrentLocation((err, temperature, forecast) => {
			if (!err) {
				const element = document.getElementById("results");
				this.weatherView.renderTemperature(element, temperature);
				this.weatherView.renderForecast(element, forecast);
			}
		});
	}
}