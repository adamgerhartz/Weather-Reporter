export default function getTemperatureObject(data) {
	const tempObject = {
		"name": data.name,
		"temp": data.main.temp,
		"feels_like": data.main.feels_like
	};
	return tempObject;
}

export default function getForecastObject(data) {
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