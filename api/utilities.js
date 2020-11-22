const fetch = require("node-fetch");

const getLocation = function(options) {
    return new Promise(function(resolve, reject) {
        // return geolocation eventually 
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



