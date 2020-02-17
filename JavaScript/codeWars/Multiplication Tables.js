function multiplicationTable(row, col) {
	const result = [],
		firstRow = [];
	let tempCol = col;
	while (firstRow.length < col) {
		firstRow.unshift(tempCol);
		tempCol--;
	}

	result.push(firstRow);

	while (result.length < row) {
		multiplier = result.length + 1;
		let tempRow = firstRow.map((value) => {
			return value * multiplier;
		});

		result.push(tempRow);
	}
	return result;
}

console.log(multiplicationTable(3, 4));
