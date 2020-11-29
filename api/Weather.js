const utils = require('./utilities');

// Weather Model
module.exports = class Weather {
  constructor() {
    this.baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
    this._weather = '';
  }
  
  async getWeatherByCity(city = 'Detroit') {
    const apiKey = process.env.API_KEY_WEATHER;
    city = city.replace(/-/g, ' ');
    this._weather = utils.getJSON(`${this.baseUrl}?q=${city}&apiKey=${apiKey}&units=imperial`);
    return this._weather;
  }
}