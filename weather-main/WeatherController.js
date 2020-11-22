const util = require('./utilities');
const Weather = require('./Weather');


// Weather controller
module.exports = class WeatherController {
  constructor(city = 'South River') {
    this.city = city;
    this.weather = new Weather();
  }

  async init() {
    this.getWeatherByCity();
  }

  async getWeatherByCity() {
    // this method provides the glue between the model and view. Notice it first goes out and requests the appropriate data from the model, then it passes it to the view to be rendered.
    //set loading message
    //this.parentElement.innerHTML = 'Loading...';
    // get the list of quakes in the specified radius of the location
    const weather = await this.weather.getWeatherByCity(this.city);
    console.log(`Weather Response: ${weather}`);
    // render the list to html
    //this.weatherView.renderWeather(weather, this.parentElement);
    // add a listener to the new list of quakes to allow drill down in to the details
    // this.parentElement.addEventListener('touchend', e => {
    //   this.getWeatherDetails(e.target.dataset.id);
    // });
  }
  async getQuakeDetails(weatherId) {
    // get the details for the quakeId provided from the model, then send them to the view to be displayed
   
  }
}
