'use strict';
let counter = 0;
function nbYear(population, percent, aug, p) {
	let ans = 0;
	while (population < p) {
		population = population + population * (percent / 100) + aug;
		ans++;
	}

	return ans;
}

console.log(nbYear(1500, 5, 100, 5000));
