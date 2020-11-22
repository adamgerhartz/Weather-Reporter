const utils = require('./utilities');

// Weather Model
class Weather {
  constructor() {
    this.baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
    this._weather = [];
  }
  async getWeatherByCity(city = 'Detroit') {
    // use the getJSON function and the position provided to build out the correct URL to get the data we need.  Store it into this._quakes, then return it
    try {
      const apiKey = this.loadApiKeyFromFile();
    } catch (error) {
      console.log(`Error: Cannot read api key from file.`);
    }
    
    this._weather = getJSON(`${this.baseUrl}&lat=${city.name}&apiKey=${apiKey}`);
    console.log(this._weather);
    return this._weather;
  }

  loadApiKeyFromFile() {

  }
  getQuakeById(id) {
    // filter this._quakes for the record identified by id and return it
    return this._quakes.features.filter(item => item.id === id)[0];
  }
}

module.exports = { Weather }