// Converter
// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.
const romanSymbolsObject = {
	1: 'I',
	2: 'II',
	3: 'III',
	4: 'IV',
	5: 'V',
	6: 'VI',
	7: 'VII',
	8: 'VIII',
	9: 'IX',
	10: 'X',
	50: 'L',
	100: 'C',
	500: 'D',
	1000: 'M',
};

const romanSymbolsArray = [
	{ 1: 'I' },
	{ 2: 'II' },
	{ 3: 'III' },
	{ 4: 'IV' },
	{ 5: 'V' },
	{ 6: 'VI' },
	{ 7: 'VII' },
	{ 8: 'VIII' },
	{ 9: 'IX' },
	{ 10: 'X' },
	{ 50: 'L' },
	{ 100: 'C' },
	{ 500: 'D' },
	{ 1000: 'M' },
];

const stringToDecimalArray = (string) => {
	return string
		.toString()
		.split('')
		.reduce((acc, value, index, array) => {
			acc.push(Number(value) * Math.pow(10, array.length - index - 1));

			return acc;
		}, []);
};

// const getLimit = (number) => {
// 	let limit = {
// 		low,
// 		high,
// 		greaterThanFive,
// 	};
// 	if (number > 10 && number < 50) {
// 		return (
// 			(limit[low] = 10),
// 			(limit[high] = 50),
// 			(limit[greaterThanFive] = false)
// 		);
// 	}
// 	if (number > 50 && number < 100) {
// 		return (
// 			(limit[low] = 10),
// 			(limit[high] = 50),
// 			(limit[greaterThanFive] = false)
// 		);
// 	}
// 	if (number > 100 && number < 500) {
// 		return (
// 			(limit[low] = 10),
// 			(limit[high] = 50),
// 			(limit[greaterThanFive] = false)
// 		);
// 	}
// 	if (number > 500 && number < 1000) {
// 		return (
// 			(limit[low] = 10),
// 			(limit[high] = 50),
// 			(limit[greaterThanFive] = false)
// 		);
// 	}
// 	if (number > 1000) {
// 		return (
// 			(limit[low] = 10),
// 			(limit[high] = 50),
// 			(limit[greaterThanFive] = false)
// 		);
// 	}
// };
function getSymbol(number, min, max, pow) {}
const getRomanSymbols = (number) => {
	if (number > 10 && number < 50) {
		let romanSymbol = '';
		if (number / 10 <= 3) {
			for (let index = 1; index <= number / 10; index++) {
				romanSymbol += `${romanSymbolsObject[10]}`;
			}
		} else
			romanSymbol = `${romanSymbolsObject[10]}${romanSymbolsObject[50]}`;
		return romanSymbol;
	}
	if (number > 50 && number < 100) {
		let romanSymbol = '';
		let amount = ((number / 50) * 10 - 10) / 2;
		if (amount <= 3) {
			romanSymbol = `${romanSymbolsObject[50]}`;
			for (let index = 1; index <= amount; index++) {
				romanSymbol += `${romanSymbolsObject[10]}`;
			}
		} else
			romanSymbol = `${romanSymbolsObject[10]}${romanSymbolsObject[100]}`;
		return romanSymbol;
	}
	if (number > 100 && number < 500) {
		let romanSymbol = '';
		if (number / 100 <= 3) {
			for (let index = 1; index <= number / 100; index++) {
				romanSymbol += `${romanSymbolsObject[100]}`;
			}
		} else
			romanSymbol = `${romanSymbolsObject[100]}${romanSymbolsObject[500]}`;
		return romanSymbol;
	}
	if (number > 500 && number < 1000) {
		let romanSymbol = '';
		let amount = ((number / 500) * 10 - 10) / 2;
		if (amount <= 3) {
			romanSymbol = `${romanSymbolsObject[500]}`;
			for (let index = 1; index <= amount; index++) {
				romanSymbol += `${romanSymbolsObject[100]}`;
			}
		} else
			romanSymbol = `${romanSymbolsObject[100]}${romanSymbolsObject[1000]}`;
		return romanSymbol;
	}
	if (number > 1000) {
		let romanSymbol = '';
		for (let index = 1; index <= number / 1000; index++) {
			romanSymbol += `${romanSymbolsObject[1000]}`;
		}

		return romanSymbol;
	}
};

function convertToRoman(num) {
	const arrayOfNum = stringToDecimalArray(num);

	return arrayOfNum.reduce((acc, value) => {
		if (value === 0) return (acc += '');
		if (romanSymbolsObject[value])
			return (acc += romanSymbolsObject[value]);
		else {
			acc += getRomanSymbols(value);
		}
		return acc;
	}, '');
}

const print = convertToRoman(68);
console.log(print);
