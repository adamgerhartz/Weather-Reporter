import RenderHelper from "./utils/RenderHelper.js";
const CHILD_LENGTH = 2;

export default class WeatherView {
	constructor(parent) {
		this.parent = parent;
		this.renderHelper = new RenderHelper();
	}

	renderForm(callback) {
		this.parent.innerHTML = '';
		this.parent.appendChild(this.renderHelper.renderInputField("City"));
		this.parent.appendChild(this.renderHelper.renderSubmitButton("Get Current Temperature & 5-Day Forecast"));
		callback(
			[...[...this.parent.children][0].children][2] // city element
		) 
	}

	renderTemperature(element, data) {
		element.innerHTML = (`
			<p id="city">City: ${data.name}</p>
			<p id="temp">Current Temperature: ${data.temp}°</p>
			<p id="feels_like">Feels Like: ${data.feels_like}°</p>
		`);
	}

	renderForecast(element, data) {
		const div = document.createElement("div");
		div.setAttribute("id", `canvas`);
		div.setAttribute("height", "370px");
		div.setAttribute("width", "100%");
		element.appendChild(div);
		let array = [];
		data.forEach(nestedItem => {
			console.log(typeof nestedItem[0].date + nestedItem[0].date);
			const datapoints = this.getDataPoints(nestedItem);
			console.log(datapoints);
			let chart = new CanvasJS.Chart(`canvas`, {
				animationEnabled: true,
				theme: "light2",
				title: {
					text: "5-Day Forecast"
				},
				axisX: {
					valueFormatString: "hh:mm TT"
				},
				axisY: {
					title: "Degrees Fahrenheit",
					suffix: "°"
				},
				toolTip: {
					shared: true
				},
				legend: {
					cursor: "pointer",
					verticalAlign: "top",
					horizontalAlign: "center",
					dockInsidePlotArea: true,
					itemclick: toogleDataSeries
				},
				data: array.push({
					axisYType: "secondary",
					name: nestedItem[0].date.toString().slice(0, 3),
					showInLegend: true,
					markerSize: 0,
					yValueFormatString: "##.##°",
					datapoints: datapoints
				})
			});
			chart.render();
		});
		
		
	}

	getDataPoints(items) {
		const array = [];
		items.forEach(item => {
			array.push({
				y: item.temp
				// x: `${item.date.toString().slice(16, 24)}`
			});
		})
		return array;
	}

	hideErrorMessages() {
		if (this.parent.childNodes.length > CHILD_LENGTH) {
			// remove errors
			for (let i = this.parent.childNodes.length - 1, min = CHILD_LENGTH - 1; i > min; i--) {
				this.parent.removeChild(this.parent.children[i]);
			}
		}
	}

	isErrorDisplayed() {
		if (this.parent.childNodes.length > CHILD_LENGTH) {
			return true;
		}
		return false;
	}

	renderError(type) {
		const error = this.renderHelper.createError(type);
		this.parent.appendChild(error);
	}
}