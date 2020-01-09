function cipher(message) {
	const cipher = message.split('').map(value => {
		let charCode = value.charCodeAt(0);
		if ((charCode >= 65 && charCode <= 77) || (charCode >= 97 && charCode <= 109)) {
			return value.charCodeAt(0) + 13;
		}
		if ((charCode >= 78 && charCode <= 89) || (charCode >= 110 && charCode <= 122)) {
			return value.charCodeAt(0) - 13;
		}

		return value.charCodeAt(0);
	});
	return cipher
		.map(value => {
			return String.fromCharCode(value);
		})
		.join('');
}

console.log(cipher('Hello'));
