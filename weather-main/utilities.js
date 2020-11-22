const getLocation = function(options) {
    const unirest = require("unirest");
    return new Promise(function(resolve, reject) {
        // return geolocation
        var req = unirest("GET", "https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/");

        console.log(process.env.API_KEY);

        req.headers({
        "x-rapidapi-key": process.env.API_KEY,
        "x-rapidapi-host": "ip-geolocation-ipwhois-io.p.rapidapi.com",
        "useQueryString": true
        });

        req.end(function (res) {
        if (res.error) throw new Error(res.error);

          console.log(res.body);
        });
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



