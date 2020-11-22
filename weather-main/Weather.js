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
    
    this._weather = utils.getJSON(`${this.baseUrl}?q=${city}&apiKey=${apiKey}`);
    return this._weather;
  }

  getQuakeById(id) {
    // filter this._quakes for the record identified by id and return it
    return this._quakes.features.filter(item => item.id === id)[0];
  }
}