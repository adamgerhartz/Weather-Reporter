const utils = require('./utilities');

// Weather Model
module.exports = class Weather {
  constructor() {
    this.baseTempUrl = 'https://api.openweathermap.org/data/2.5/weather';
    this.baseForecastUrl = 'https://api.openweathermap.org/data/2.5/forecast';
    this._weather = '';
  }
  
  async getWeatherByCity(city = 'Detroit') {
    const apiKey = process.env.API_KEY_WEATHER;
    city = city.replace(/-/g, ' ');
    this._weather = utils.getJSON(`${this.baseTempUrl}?q=${city}&apiKey=${apiKey}&units=imperial`);
    return this._weather;
  }

  async getForecastByCity(city = 'Detroit') {
    const apiKey = process.env.API_KEY_WEATHER;
    city = city.replace(/-/g, ' ');
    this._weather = utils.getJSON(`${this.baseForecastUrl}?q=${city}&apiKey=${apiKey}&units=imperial`);
    return this._weather;
  }

  async getWeatherByCoordinates(lat, lon) {
    const apiKey = process.env.API_KEY_WEATHER;
    this._weather = utils.getJSON(`${this.baseTempUrl}?lat=${lat}&lon=${lon}&apiKey=${apiKey}&units=imperial`);
    return this._weather;
  }
}