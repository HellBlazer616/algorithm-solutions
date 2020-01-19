'use strict';

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
	const vowels = [],
		vowelsReference = ['a', 'e', 'i', 'o', 'u'];

	const consonants = s.split('').reduce((acc, value) => {
		if (vowelsReference.includes(value)) vowels.push(value);
		else acc.push(value);

		return acc;
	}, []);

	vowels.forEach((letter) => {
		console.log(letter);
	});
	consonants.forEach((letter) => {
		console.log(letter);
	});
}

function vowelsAndConsonantsRegex(string) {
	const vowels = string.match(/[aeiou]/gi);
	const consonants = string.match(/[^aeiou]/gi);
	vowels.forEach((letter) => {
		console.log(letter);
	});
	consonants.forEach((letter) => {
		console.log(letter);
	});
}
console.log(
	vowelsAndConsonants('javascriptloops') ==
		vowelsAndConsonantsRegex('javascriptloops')
);
