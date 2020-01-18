function rgb(r, g, b) {
	const arr = [r, g, b];

	return arr.reduce((acc, value, index, array) => {
		if (value <= 0) acc += '00';
		else if (value > 255) acc += 'FF';
		else
			acc += Math.abs(value)
				.toString(16)
				.padStart(2, '0')
				.toUpperCase();
		return acc;
	}, '');
}

console.log(rgb(146, 201, 3));
