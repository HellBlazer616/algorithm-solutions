function iqTest(numbers) {
	const num = numbers.split(' ');
	const evenOrOdd = {
		true: [],
		false: [],
	};

	num.reduce((acc, value, index, array) => {
		if (value % 2 === 0) acc['true'].push(index + 1);
		else acc['false'].push(index + 1);

		return acc;
	}, evenOrOdd);

	return evenOrOdd.true.length > evenOrOdd.false.length
		? evenOrOdd.false[0]
		: evenOrOdd.true[0];
}

console.log(iqTest('2 4 7 8 10'));
