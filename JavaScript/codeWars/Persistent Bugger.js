'use strict';

function persistence(num) {
	let ans;
	let count = 0;
	function multi(number) {
		count++;
		return String(number)
			.split('')
			.reduce((acc, value) => {
				return (acc *= Number(value));
			}, 1);
	}

	while (String(ans).length !== 1) {
		ans = multi(ans || num);
	}
	return String(num).length === 1 ? --count : count;
}

console.log(persistence(999));
