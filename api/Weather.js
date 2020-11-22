const utils = require('./utilities');

// Weather Model
module.exports = class Weather {
  constructor() {
    this.baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
    this._weather = '';
  }
  async getWeatherByCity(city = 'Detroit') {
    // use the getJSON function and the position provided to build out the correct URL to get the data we need.  Store it into this._quakes, then return it
    const apiKey = process.env.API_KEY_WEATHER;
    
    this._weather = utils.getJSON(`${this.baseUrl}?q=${city}&apiKey=${apiKey}&units=imperial`);
    return this._weather;
  }
}