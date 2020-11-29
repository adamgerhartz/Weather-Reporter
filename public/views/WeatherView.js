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
		this.parent.appendChild(this.renderHelper.renderSubmitButton("Get Current Temperature"));
		callback(
			[...[...this.parent.children][0].children][2] // city element
		) 
	}

	renderResults(parent, data) {
		this.parent.appendChild(this.renderResults(data));
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

	renderResults(data) {
		const div = document.createElement("div");
		div.innerHTML = (`
			<label for='name'>City:</label><br/>
			<p>${city.name}</p>
			<label for='name'>Current Temperature:</label><br/>
			<p>${city.temp}</p>
			<label for='name'>Feels Like:</label><br/>
			<p>${city.feels_like}</p>
		`);
		return div;
	}
}