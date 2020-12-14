function getTemperatureObject(data) {
	const tempObject = {
		"name": data.name,
		"temp": data.main.temp,
		"feels_like": data.main.feels_like
	};
	return tempObject;
}

function getForecastObject(data) {
	let forecastArray = [];
	data.list.forEach(item => {
		forecastArray.push({
			date: convertUnixToLocalDate(item.dt),
			temp: item.main.temp
		});
	});
	// splice forecast array into 5 days
	let splicedArray = [];
	while (forecastArray.length) {
		splicedArray.push(forecastArray.splice(0, 8));
	}
	return splicedArray;
}

function convertUnixToLocalDate(epoch) {
	let d = new Date(0);
	d.setUTCSeconds(epoch);
	return d;
}

function getCurrentLocation() {
	const options = {
		enableHighAccuracy: true,
		timeout: 5000,
		maximumAge: 0
	}
 
	navigator.geolocation.getCurrentPosition(success, error, options);
}

function success(position) {
	return position;
}

function error(err) {
	console.warn(`ERROR(${err.code}): ${err.message}`);
	return { success: false };
}

export { getTemperatureObject, getForecastObject, getCurrentLocation };