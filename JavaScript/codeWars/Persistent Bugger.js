'use strict';

function persistence(num) {
	let numString = num.toString();
	let count = 0;

	while (numString.length !== 1) {
		count++;
		numString = numString
			.split('')
			.reduce((acc, value) => {
				return (acc *= Number(value));
			}, 1)
			.toString();
	}
	return count;
}

console.log(persistence(9));
