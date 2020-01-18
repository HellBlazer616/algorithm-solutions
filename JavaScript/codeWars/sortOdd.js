function sortArray(array) {
	const oddNumbers = array.filter(value => {
		return value % 2 !== 0;
	});
	oddNumbers.sort((a, b) => a - b);
	return array.map(value => {
		return value % 2 !== 0 ? oddNumbers.shift() : value;
	});
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));
