const getLocation = function(options) {
    const unirest = require("unirest");
    return new Promise(function(resolve, reject) {
        // return geolocation
    });
};
   
function getJSON(url) {
  const fetch = require("node-fetch");
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



