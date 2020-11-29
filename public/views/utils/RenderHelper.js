export default class RenderHelper {

	renderInputField(child) {
		const div = document.createElement("div");
		div.innerHTML = (`
			<label for='${child.toLowerCase()}'>${child}</label><br/>
			<input type='${child === 'Password' ? 'password' : 'text'}' class='light form-control' name='${child.toLowerCase()}' autocomplete='off'>
		`);
		return div;
	}

	renderSubmitButton(value) {
		const div = document.createElement("div");
		div.innerHTML = `<input type='submit' class='btn light btn-primary' name='submit' value='${value}'>`;
		return div;
	}

	createError(type) {
		const span = document.createElement("span");
		span.setAttribute("id", "error");
		span.innerHTML = `<br/>Error:`;
		switch (type) {
			case 'city':
				span.innerHTML += ` City must (1) start with a letter from the alphabet, (2) limit itself to 100 characters, and (3) contain no whitespace as the first character.`;
				break;
			case 'city-e':
				span.innerHTML += ` Please enter a city.`;
				break;
			case 'city-no':
				span.innerHTML += ` Error: No weather data for that city. Please enter another city or check spelling`;
				break;
			default:
				span.innerHTML += '';
		}
		return span;
	}
}