function kebabize(str) {
	return str
		.split('')
		.map((value, index, array) => {
			if (value.match(/\d/)) return [];
			else if (
				value.charCodeAt(0) >= 'A'.charCodeAt(0) &&
				value.charCodeAt(0) <= 'Z'.charCodeAt(0)
			) {
				if (index === 0) return `${value.toLowerCase()}`;
				else return `-${value.toLowerCase()}`;
			} else return value;
		})
		.join('');
}

console.log(kebabize('myCamelCasedString'));

console.log(typeof Number('m') === typeof 3);
