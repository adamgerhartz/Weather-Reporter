const getLocation = function(options) {
    const geolocation = require('geolocation');
    return new Promise(function(resolve, reject) {
        // return geolocation
        geolocation.getCurrentPosition(resolve, reject, options);
    });
};
   
function getJSON(url) {
    return fetch(url)
  		.then(response => {
  			if (!response.ok) {
  				  throw Error(response.statusText);
            } else {
            return response.json();
  			}
  		})
  		.catch(function(error) {
            console.log(error);
      });
}

module.exports = { getLocation, getJSON }